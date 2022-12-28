import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../data/user-context";
import "./register.css";

export default function RegisterForm() {

    const {setFname, setDate} = useContext(UserContext)
    

    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    const { email, userName, password, confirmPassword } = formData;
    
    if (!email || !userName || !password || !confirmPassword) {
      alert("Please fill all the field");
    } else if (password && confirmPassword && password !== confirmPassword) {
      alert("Password and Confirm password should be same");
    } else if(email && userName && password && confirmPassword) {
      let flag = false;
      let data = localStorage.getItem("user");
      if (!data) {
        let arr = [];
        localStorage.setItem("user", JSON.stringify(arr));
        data = localStorage.getItem("user");
      }

      let temp = JSON.parse(data);
      temp.forEach((ele) => {
        if (ele.email === formData.email) {
          flag = true;
          alert("Email already exist please login");
        }
      });

      if (!flag) {
        let date = new Date()
        setFname(formData.userName)
        setDate(date)
        let dataWithDate = {...formData,date:date}
        temp.push(dataWithDate);
        localStorage.setItem("user", JSON.stringify(temp));
      }

      navigate('/dashboard')
    }
  }

  return (
    <div className="sign-up-container">
      <p className="welcome-text">Welcome !</p>
      <p className="sign-up-text">Sign up to</p>
      <p>My website</p>

      <div className="form-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => {
            handleChange(e);
          }}
          name="email"
          value={formData.email}
        />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => {
            handleChange(e);
          }}
          name="userName"
          value={formData.userName}
          required="required"
        />
        <label htmlFor="userName">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="password"
          value={formData.password}
        />
        <label htmlFor="Password">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="confirmPassword"
          value={formData.confirmPassword}
        />
        <button className="register-btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
      <p className="bottom-text">
        Already have an Account ?<span className="login-text" onClick={() => {navigate('/login')}}>Login</span>
      </p>
    </div>
  );
}
