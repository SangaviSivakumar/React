import { useState } from "react";

const Login = () => {
  let [Id, setId] = useState("");
  let [pass, setPass] = useState("");
  let [newPass, setNewPass] = useState("");
  // to get userId
  const handleUserId = (event) => {
    setId(event.target.value);
  };
  // to get password
  const handleUserPass = (event) => {
    setPass(event.target.value);
  };
  // for sign in
  const signUp = () => {
    localStorage.setItem(Id, pass);
  };
  //for sign up
  const signIn = () => {
    let p = localStorage.getItem(Id);
    if (p === pass) {
      alert("Welcome");
    } else {
      alert("Try again");
    }
  };
  // for updating password
  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const updatePassword = () => {
    let oldPass = localStorage.getItem(Id);
    if (oldPass === pass) {
      localStorage.setItem(Id, newPass);
      alert("Password updated successfully");
    } else {
      alert("Current password incorrect. Cannot update.");
    }
  };

  return (
    <>
      <div className="cont">
        <input
          type="text"
          placeholder="enter user id"
          onChange={handleUserId}
        />
        <input
          type="password"
          placeholder="enter Password"
          onChange={handleUserPass}
        />
        <input
          type="password"
          placeholder="Enter new password"
          onChange={handleNewPass}
        />
        <button onClick={signIn}>Sign In</button>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={updatePassword}>Update Password</button>
      </div>
    </>
  );
};

export default Login;
