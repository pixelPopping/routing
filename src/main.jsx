import React from "react";
import ReactDOM from "react-dom/client";
import { NewPost } from "./NewPost";
import { Root } from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { PostList, Loader as postListLoader } from "./PostList"; // Correctly import PostList and loader
import Post, { loader as postLoader } from "./Post";
import User, { loader as userLoader } from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Something went wrong! Please try again later.</div>,
    children: [
      {
        path: "/",
        element: <PostList />, // Render PostList component here
        loader: postListLoader, // Loader for PostList component
        errorElement: <div>Failed to load posts!</div>,
      },
      {
        path: "/post/:postId",
        element: <Post />,
        loader: postLoader,
        errorElement: <div>Post not found!</div>,
      },
      {
        path: "/user/:userId",
        element: <User />,
        loader: userLoader,
        errorElement: <div>User not found!</div>,
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
