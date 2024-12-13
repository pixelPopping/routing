// In PostList.js
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
export function PostList() {
  const { posts, users } = useLoaderData(); // Access the data returned by the loader

  return (
    <div className="post-list">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>
              {post.body.slice(0, 20)}
              {post.body.length > 20 ? "..." : ""}
            </p>
          </li>
        ))}
      </ul>
      <div className="post"></div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              <h2>{user.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Loader() {
  try {
    const [postsResponse, usersResponse] = await Promise.all([
      fetch("http://localhost:3000/posts"),
      fetch("http://localhost:3000/users"),
    ]);

    // Ensure both fetches were successful
    if (!postsResponse.ok || !usersResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the JSON responses
    const posts = await postsResponse.json();
    const users = await usersResponse.json();

    // Return the combined data for the component to use
    return { posts, users };
  } catch (error) {
    console.error("Error loading data:", error);
    throw error; // Rethrow to handle errors in the UI
  }
}
