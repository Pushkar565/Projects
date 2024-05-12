import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate(); // Create an instance of the useNavigate hook

  const handleSignIn = () => {
    const email = document.getElementsByName("uname")[0].value;
    const password = document.getElementsByName("psw")[0].value;

    if (email === "kpushkar56@gmail.com" && password === "1234") {
      alert("Login Successful");
      navigate("/MenProductPage"); // Navigate to the WomenProductPage route
    } else {
      alert("Invalid credentials");
    }
  };
  const handleSignUp = () => {
    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("uname")[0].value;
    const password = document.getElementsByName("psw")[0].value;

    if (name === "" || email === "" || password === "") {
      alert("Enter Details");
    } else {
      alert("Sign Up Successful");
      window.location.href = "/WomenProductPage";
    }
  };

  return (
    <div className="container">
      <div id="imgdiv">
        <a href="/">
          <img id="asos" src="src\SignIn-images\sign in asos.png" alt="" />
        </a>
      </div>

      {!isSignIn && (
        <div className="Name">
          <label htmlFor="uname">
            <b>Name:</b>
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
      )}

      <div className="login">
        <label htmlFor="uname">
          <b>EMAIL ADDRESS:</b>
        </label>
        <input
          type="text"
          className="input"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <label htmlFor="psw">
          <b>PASSWORD:</b>
        </label>
        <input
          type="password"
          className="input"
          placeholder="Enter Password"
          name="psw"
          required
        />
        {isSignIn ? (
          <input type="submit" id="signIn" value="Login" onClick={handleSignIn} />
        ) : (
          <input type="submit" id="signIn" value="Sign Up" onClick={handleSignUp} />
        )}
        <a href="">
          <p>Forget Password</p>
        </a>
        <h3>OR {isSignIn ? "SIGN UP WITH" : "SIGN IN WITH"}</h3>
        <div>
          <button className="btn">
            <img src="/profile_page/sign in page/google.svg" alt="" />
            Google
          </button>
        </div>
        <div>
          <button className="btn">
            <img src="/profile_page/sign in page/facebook.png" alt="" />
            Facebook
          </button>
        </div>
        <div>
          <button className="btn">
            <img src="/profile_page/sign in page/apple.svg" alt="" />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
