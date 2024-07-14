import React from "react";
import Home from "./Page/Home";
import News from "./Page/News";
import Login from "./Page/Login.";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Login",
    element: <Login />,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
