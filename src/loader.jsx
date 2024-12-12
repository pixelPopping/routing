const loader = async () => {
  try {
    // Fetch posts and users concurrently
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

    // Return the combined data
    return { posts, users };
  } catch (error) {
    console.error("Error loading data:", error);
    throw error; // Rethrow to handle errors in the UI
  }
};

export { loader };
