import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const followUser = async (userId) => {
    await fetch(`http://localhost:5000/api/users/${userId}/follow`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    alert("User followed");
  };

  return (
    <div className="feed-container">
      <h3>People to Follow</h3>

      {users.map((user) => (
        <div key={user._id} className="post-card">
          <div className="post-content">
            <b>{user.username}</b>
            <br />
            <button onClick={() => followUser(user._id)}>Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
