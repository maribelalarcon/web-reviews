import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>
        <div>
          <p>
            Don't have account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
