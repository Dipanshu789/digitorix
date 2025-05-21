import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [signup, setSignup] = useState(false);
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Handle login form input
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle signup form input
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // Login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/auth/login`, credentials);
      alert("Login successful!");
      // You can store token: localStorage.setItem("token", res.data.token);
      // Redirect or update UI as needed
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  // Signup submit
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/auth/register`, signupData);
      alert("Signup successful! You can now login.");
      setSignup(false);
      setSignupData({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
    setLoading(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <StyledWrapper>
        {!signup ? (
          <form className="form_main" onSubmit={handleSubmit} autoComplete="off">
            <p className="heading">Admin Login</p>
            <div className="inputContainer">
              <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                placeholder="Email"
                id="email"
                name="email"
                className="inputField"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inputContainer">
              <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <input
                placeholder="Password"
                id="password"
                name="password"
                className="inputField"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button id="button" type="submit" disabled={loading}>{loading ? "Logging in..." : "Submit"}</button>
            <div className="signupContainer">
              <p>Don't have any account?</p>
              <a href="#" onClick={e => { e.preventDefault(); setSignup(true); }}>Sign up</a>
            </div>
          </form>
        ) : (
          <form className="form_main" onSubmit={handleSignup} autoComplete="off">
            <p className="heading">Admin Signup</p>
            <div className="inputContainer">
              <input
                placeholder="Name"
                id="name"
                name="name"
                className="inputField"
                type="text"
                value={signupData.name}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="inputContainer">
              <input
                placeholder="Email"
                id="signup-email"
                name="email"
                className="inputField"
                type="email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="inputContainer">
              <input
                placeholder="Password"
                id="signup-password"
                name="password"
                className="inputField"
                type="password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
            </div>
            <button id="button" type="submit" disabled={loading}>{loading ? "Signing up..." : "Sign up"}</button>
            <div className="signupContainer">
              <p>Already have an account?</p>
              <a href="#" onClick={e => { e.preventDefault(); setSignup(false); }}>Login</a>
            </div>
          </form>
        )}
      </StyledWrapper>
       <df-messenger
        intent="WELCOME"
        chat-title="Digitornix"
        agent-id="27f4dbf5-7da5-4882-858e-0d50a1875b2b"
        language-code="en"
      ></df-messenger>
    </div>

  );
};

const StyledWrapper = styled.div`
  .form_main {
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  }
  .heading {
    font-size: 2em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 15px 0 30px 0;
    text-align: center;
  }
  .inputContainer {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inputIcon {
    position: absolute;
    left: 10px;
  }
  .inputField {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(173, 173, 173);
    border-radius: 30px;
    margin: 10px 0;
    color: black;
    font-size: 1em;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 30px;
  }
  .inputField:focus {
    outline: none;
    border-bottom: 2px solid rgb(199, 114, 255);
  }
  .inputField::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
  }
  #button {
    position: relative;
    width: 100%;
    border: 2px solid #8000ff;
    background-color: #8000ff;
    height: 40px;
    color: white;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 30px;
    margin: 10px 0 20px 0;
    cursor: pointer;
    overflow: hidden;
    transition: background 0.3s;
  }
  #button::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: .5s;
  }
  #button:hover::after {
    transform: translateX(600px);
    transition-duration: .5s;
  }
  .signupContainer {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .signupContainer p {
    font-size: .95em;
    font-weight: 500;
    color: black;
    margin: 0;
  }
  .signupContainer a {
    font-size: .85em;
    font-weight: 500;
    background-color: #2e2e2e;
    color: white;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
  }
  @media (max-width: 576px) {
    .form_main {
      padding: 18px;
      border-radius: 18px;
      max-width: 98vw;
    }
    .heading {
      font-size: 1.5em;
    }
    .inputField {
      font-size: 0.95em;
    }
  }
`;

export default AdminLogin;