import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import logo from "../../assets/logo_white.png";
import logo2 from "../../assets/logo.png";
// import "../../fonts/style.css";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsam praesentium corporis quis, dolorum sunt optio animi quidem
              neque!
            </p>
            {/* <span>Don't you have an account?</span> */}
            {/* <Link to={"/register"}>
              <button>Create New Account</button>
            </Link> */}
          </div>
          <div className="right">
            {/* <img src={logo2} alt="" /> */}
            <h1>Login</h1>
            <form>
              <input
                type="text"
                className="text"
                placeholder="username"
                required
              />
              <div className="password-input">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="password"
                  required
                />
                <span
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <div className="icon">
                      <RemoveRedEyeOutlinedIcon />
                    </div>
                  ) : (
                    <div className="icon">
                      <VisibilityOffOutlinedIcon />
                    </div>
                  )}
                </span>
              </div>
              <label className="checkbox" htmlFor="">
                <input type="checkbox" /> Remember Me
              </label>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
