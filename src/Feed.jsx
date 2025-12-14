import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [followingIds, setFollowingIds] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    // Fetch feed posts
    fetch("http://localhost:5000/api/posts/feed", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));

    // Fetch users to follow
    fetch("http://localhost:5000/api/users", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // Fetch current user following list
    fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setFollowingIds(data.following || []));
  }, []);

  const followUser = async (userId) => {
    await fetch(`http://localhost:5000/api/users/${userId}/follow`, {
      method: "POST",
      headers: { Authorization: token },
    });

    setFollowingIds([...followingIds, userId]);
  };

  return (
    <div className="app">
      {/* TOP BAR */}
      <div className="top-nav">Instagram</div>

      {/* STORIES (UI ONLY) */}
      <div className="stories">
        {["You", "alex", "john", "emma", "lucy"].map((name, index) => (
          <div key={index} className="story">
            <div className="story-circle">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="story"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </div>
            {name}
          </div>
        ))}
      </div>

      {/* USERS TO FOLLOW */}
      <div className="feed-container">
        <div className="section-title">Suggested for you</div>

        {users.map((user) => (
          <div key={user._id} className="post-card">
            <div className="post-content">
              <b>{user.username}</b>
              <br />
              <button
                className="primary-btn"
                disabled={followingIds.includes(user._id)}
                onClick={() => followUser(user._id)}
                style={{
                  backgroundColor: followingIds.includes(user._id)
                    ? "#ccc"
                    : "#0095f6",
                }}
              >
                {followingIds.includes(user._id) ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        ))}

        {/* POSTS FEED */}
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-header">
              {post.userId?.username}
            </div>

            <img
              src={
                post.imageUrl ||
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              }
              className="post-image"
              alt="post"
            />

            <div className="post-content">
              <div className="post-icons">❤️ 💬</div>
              <div className="post-actions">
                {post.likes?.length || 0} likes
              </div>
              <p>
                <b>{post.userId?.username}</b> {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV (UI ONLY) */}
      <div className="bottom-nav">
        🏠 🔍 ➕ ❤️ 👤
      </div>
    </div>
  );
}

export default Feed;
