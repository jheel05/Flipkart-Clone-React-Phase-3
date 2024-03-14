import { useState } from "react";
import "./login.scss";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUser, setUserdata } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (username === "" || password === "") {
        throw new Error("Please fill all the fields");
      }
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed, Please try again");
      }

      const data = await response.json();
      const token = data.token;
      setUserdata(JSON.stringify(data));
      localStorage.setItem("token", token);
      localStorage.setItem("data", JSON.stringify(data));
      setUser({ token });

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <div className="agree-terms">
            By continuing, you agree to Flipkart&apos;s{" "}
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
