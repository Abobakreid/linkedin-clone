import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Pages/Root";
import Login from "./Pages/Login";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Home from "./Pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Route>
    )
  );

  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </Provider>
    </>
  );
};

export default App;
