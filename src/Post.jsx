// Post.jsx
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { postId } = params;

  // Fetch the post data
  const postResponse = await fetch(`/api/posts/${postId}`);
  const post = await postResponse.json();

  // Fetch the comments for the post
  const commentsResponse = await fetch(`/api/posts/${postId}/comments`);
  const comments = await commentsResponse.json();

  // Fetch all users
  const usersResponse = await fetch(`/api/users`);
  const users = await usersResponse.json();

  return { post, comments, users };
};

const Post = () => {
  const { post, comments, users } = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{users.find((u) => u.id === comment.userId)?.name}:</strong>{" "}
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
