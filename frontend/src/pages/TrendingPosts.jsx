import React, { useEffect, useState } from "react";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/trending-posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="border-b p-2">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.commentsCount} comments</p>
        </div>
      ))}
    </div>
  );
}

export default TrendingPosts;