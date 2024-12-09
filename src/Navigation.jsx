import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>{" "}
        {/* Link to Home page */}
        <li>
          <Link to="/post/new">Create New Post</Link>
        </li>{" "}
        {/* Link to create a new post */}
        <li>
          <Link to="/user/1">User 1</Link>
        </li>{" "}
        {/* Example link to User 1 */}
        <li>
          <Link to="/post/1">Post 1</Link>
        </li>{" "}
        {/* Example link to Post 1 */}
      </ul>
    </nav>
  );
};

export { Navigation };
