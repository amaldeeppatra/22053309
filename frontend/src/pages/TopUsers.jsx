import React, { useEffect, useState } from "react";

function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/top-users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b p-2">
            {user.name} - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;