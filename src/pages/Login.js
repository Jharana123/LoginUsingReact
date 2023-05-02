import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import className from '../App.css'
// import Authentication from "./Authentication";
const Login=()=>{
     const [user, setUser] = useState("");
     const [password, setPassword] = useState("");
     const [submitted, setSubmitted] = useState(false);

     const data = [
       {
         user: "manoj",
         password: "12345",
       },
       {
         user: "amartya",
         password: "54321",
       },
     ];
     const navigate=useNavigate()
     const handelClick=()=>{
        navigate("/authentication")
     }
      const submitForm = (e) => {
        e.preventDefault();
        console.log("user", user, "password", password);
        const loggedUser = data.filter(
          (item) => item.user === user && item.password === password
        );
        setSubmitted(loggedUser);
      };

      if (submitted) {
        return (
          <p>
            {submitted.length > 0 ? (
              <h1 onClick={handelClick}>Submit</h1>
            ) : (
              "Submitted UnSucessfull"
            )}
          </p>
        );
      }
    return (
      <center>
        <>
      <div className="App">
        <form action="" onSubmit={submitForm}>
          <div>
            <lable htmlFor="user">User</lable>
            <input
              type="text"
              placeholder="Enter User Name"
              autoComplete="off"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              
            />
          </div>
          <div>
            <lable htmlFor="password">Password</lable>
            <input
              type="password"
              placeholder="Enter Your Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
    </center>
    );
}
export default Login;