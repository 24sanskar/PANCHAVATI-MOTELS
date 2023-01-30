import "./login.css";
import React from "react";

const Login = () => {
  return (
    <div class="box">
      <div class="card">
        <h2>Sign in</h2>

        <form>
          <div class="inputBox">
            <input type="text" placeholder="Username" />
          </div>
          <div class="inputBox">
            <input type="password" placeholder="Password" />
          </div>
          <div class="inputBox">
            <button class="btn">Submit</button>
          </div>
          <p class="forget">Forgot Password </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
