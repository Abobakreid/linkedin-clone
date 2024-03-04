import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { auth, db, provider, storage } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
// import { ref, uploadBytesResumable } from "firebase/database";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

let initialState = {
  users: {},
  logSuccess: false,
  posts: [],
};

export const logUser = createAsyncThunk("users/logUser", async () => {
  const data = await signInWithPopup(auth, provider)
    .then((val) => {
      return val;
    })
    .catch((err) => {
      console.error(err, "err");
    });

  console.log(data, "action.payload");

  return {
    name: data.user.displayName,
    email: data.user.email,
    photoUrl: data.user.photoURL,
  };
});

export const logOutUser = createAsyncThunk("users/logOutUser", async () => {
  await auth.signOut();
  return {
    name: null,
    email: null,
    photoUrl: null,
  };
});

export const postArticles = createAsyncThunk(
  "users/postArticles",
  async (data) => {
    console.log(data, "payLoadHomearticles");
    if (data.postImage) {
      const fireStorage = ref(storage, `images/${data.postImage.name}`);
      const uploadRef = uploadBytesResumable(fireStorage, data.postImage);
      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress, "progress");
        },
        (error) => {
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((downloadURL) => {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
              actor: {
                description: data?.CreatorDescription,
                title: data?.CreatorTitle,
                data: data?.timestamp,
                image: data?.CreatorImage,
              },
              comments: data.postText,
              videoLink: data?.postVideoLink,
              description: data?.timestamp,
              shareImage: downloadURL,
            });
          });
        }
      );
    } else if (data.postVideoLink) {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: data?.CreatorDescription,
          title: data?.CreatorTitle,
          data: data?.timestamp,
          image: data?.CreatorImage,
        },
        comments: data.postText,
        videoLink: data?.postVideoLink,
        description: data?.timestamp,
        shareImage: data?.postImage,
      });
    } else {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: data?.CreatorDescription,
          title: data?.CreatorTitle,
          data: data?.timestamp,
          image: data?.CreatorImage,
        },
        comments: data.postText,
        videoLink: "",
        description: data?.timestamp,
        shareImage: "",
      });
    }
  }
);

export function getShorts() {
  return new Promise((resolve) => {
    const collRef = collection(db, "articles");
    const orderPosts = query(collRef, orderBy("actor.data", "desc"));
    onSnapshot(orderPosts, (snapshot) => {
      const urls = snapshot.docs.map((doc) => doc.data());
      resolve(urls);
    });
  });
}

export const getArticles = createAsyncThunk("users/getArticles", async () => {
  let data = getShorts();
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    // handel sign in from website
    builder.addCase(logUser.pending, (state) => {
      state.logSuccess = true;
    });
    builder.addCase(logUser.fulfilled, (state, action) => {
      state.logSuccess = false;
      state.users = action.payload;
      console.log(action.payload, "action.payload");
    });
    builder.addCase(logUser.rejected, (state) => {
      state.logSuccess = false;
    });

    // handel sign out from website
    builder.addCase(logOutUser.pending, (state) => {
      state.logSuccess = true;
    });
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.logSuccess = false;
      state.users = action.payload;
      console.log(action.payload, "action.payload");
    });
    builder.addCase(logOutUser.rejected, (state) => {
      state.logSuccess = false;
    });

    // post posts data to articles collection
    builder.addCase(postArticles.pending, (state) => {
      state.logSuccess = true;
    });
    builder.addCase(postArticles.fulfilled, (state) => {
      state.logSuccess = false;
    });
    builder.addCase(postArticles.rejected, (state) => {
      state.logSuccess = false;
    });

    // get posts from articles collection
    builder.addCase(getArticles.pending, (state) => {
      state.logSuccess = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.logSuccess = false;
      state.posts = action.payload;
    });
    builder.addCase(getArticles.rejected, (state) => {
      state.logSuccess = false;
    });
  },
});

export default userSlice.reducer;
