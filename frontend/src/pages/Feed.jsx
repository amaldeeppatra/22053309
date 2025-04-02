import React, { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://localhost:3000/api/feed")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="border-b p-2">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;