import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="Register">
        <div className="card">
          <div className="left">
            <h1>Social App.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsam praesentium corporis quis, dolorum sunt optio animi quidem
              neque!
            </p>
            <span>Do you have an account ?</span>
            <button>Login</button>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="Phone" />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
