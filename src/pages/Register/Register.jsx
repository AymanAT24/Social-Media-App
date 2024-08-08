// import React, { useState } from "react";
// import "./Register.scss";
// import { Link } from "react-router-dom";
// import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

// const Register = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [rePasswordVisible, setRePasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleRePasswordVisibility = () => {
//     setRePasswordVisible(!rePasswordVisible);
//   };

//   return (
//     <>
//       <div className="Register">
//         <div className="card">
//           <div className="left">
//             <h1>Social App.</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
//               ipsam praesentium corporis quis, dolorum sunt optio animi quidem
//               neque!
//             </p>
//             <span>Do you have an account?</span>
//             <Link to={"/login"}>
//               <button>Login</button>
//             </Link>
//           </div>
//           <div className="right">
//             <h1>Register</h1>
//             <form>
//               <input type="text" placeholder="username" />
//               <input type="email" placeholder="Email" />
//               <div className="password-input">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="Password"
//                 />
//                 <span
//                   className="password-icon"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {passwordVisible ? (
//                     <div className="icon">
//                       <RemoveRedEyeOutlinedIcon />
//                     </div>
//                   ) : (
//                     <div className="icon">
//                       <VisibilityOffOutlinedIcon />
//                     </div>
//                   )}
//                 </span>
//               </div>
//               <div className="password-input">
//                 <input
//                   type={rePasswordVisible ? "text" : "password"}
//                   placeholder="Re-enter Password"
//                 />
//                 <span
//                   className="password-icon"
//                   onClick={toggleRePasswordVisibility}
//                 >
//                   {rePasswordVisible ? (
//                     <RemoveRedEyeOutlinedIcon />
//                   ) : (
//                     <VisibilityOffOutlinedIcon />
//                   )}
//                 </span>
//               </div>
//               <input type="text" placeholder="Phone" />
//               <button>Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
