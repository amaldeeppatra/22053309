import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="flex justify-center space-x-4 mb-4">
          <a href="/" className="text-blue-500 hover:underline">Feed</a>
          <a href="/top-users" className="text-blue-500 hover:underline">Top Users</a>
          <a href="/trending-posts" className="text-blue-500 hover:underline">Trending Posts</a>
        </nav>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
