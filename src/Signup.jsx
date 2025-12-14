import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupUser = async () => {
    await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    alert("Signup successful");
    navigate("/");
  };

  return (
  <div className="auth-container">
    <h2>Instagram</h2>

    <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Password"
           onChange={(e) => setPassword(e.target.value)} />

    <button onClick={signupUser}>Sign Up</button>
  </div>
);

}

export default Signup;
