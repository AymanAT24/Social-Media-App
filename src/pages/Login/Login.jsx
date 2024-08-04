import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsam praesentium corporis quis, dolorum sunt optio animi quidem
              neque!
            </p>
            <span>Don't you have an account ?</span>
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
