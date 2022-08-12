import React from "react";
import Logo from "../../assets/logo.svg";
function Login() {
  return (
    <div className="container login">
      <div className="d-flex flex-column mx-auto w-25 mt-5 ">
        <img className="mt-3" src={Logo} alt="logo" width="50" height="41" />
        <h2 className="fw-bold mt-3">Log in to Twitter</h2>
        <input
          className="mt-3 form-control p-2 "
          type="text"
          placeholder="Phone number, email address"
        />
        <input
          className="mt-3 form-control p-2"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary mt-3 rounded-5">Log in</button>
      </div>
    </div>
  );
}

export default Login;
