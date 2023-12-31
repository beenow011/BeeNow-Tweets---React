import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  HashRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home } from "./components/Home.jsx";
import { Tweets } from "./components/Tweets.jsx";
import { Profile } from "./components/Profile.jsx";
import { UserProfile } from "./components/UserProfile.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tweets",
        element: <Tweets />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "userprofile/:userId",
        element: <UserProfile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
