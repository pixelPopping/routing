import React from "react";
import ReactDOM from "react-dom/client";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { PostList } from "./PostList";
import { User } from "./User";
import { Root } from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/post/new",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
