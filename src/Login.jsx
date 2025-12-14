import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/feed");
    } else {
      alert("Login failed");
    }
  };

return (
  <div className="auth-container">
    <h2>Instagram</h2>

    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={loginUser}>Log In</button>

    <p style={{ marginTop: "15px", cursor: "pointer" }}
       onClick={() => navigate("/signup")}>
      New user? <b>Sign up</b>
    </p>
  </div>
);


}

export default Login;
