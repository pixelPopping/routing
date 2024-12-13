// User.jsx
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { userId } = params;

  // Fetch the user data
  const userResponse = await fetch(`/api/users/${userId}`);
  const user = await userResponse.json();

  // Fetch the posts of the user
  const postsResponse = await fetch(`/api/users/${userId}/posts`);
  const posts = await postsResponse.json();

  // Fetch the comments of the user
  const commentsResponse = await fetch(`/api/users/${userId}/comments`);
  const comments = await commentsResponse.json();

  return { user, posts, comments };
};

const User = () => {
  const { user, posts, comments } = useLoaderData();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
