import { configureStore } from "@reduxjs/toolkit";
import userList from "./userList";

const store = configureStore({
  reducer: {
    userList: userList,
  },
});

export default store;
