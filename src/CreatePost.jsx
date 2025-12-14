import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const createPost = async () => {
    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ imageUrl, caption }),
    });

    alert("Post created");
    navigate("/feed");
  };

 return (
  <div className="auth-container">
    <h2>Create Post</h2>

    <input placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} />
    <input placeholder="Caption" onChange={(e) => setCaption(e.target.value)} />

    <button onClick={createPost}>Post</button>
  </div>
);

}

export default CreatePost;
