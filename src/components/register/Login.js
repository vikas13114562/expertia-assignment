import React, {useState, useContext} from "react";
import { UserContext } from "../data/user-context";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {setFname, setDate} = useContext(UserContext)

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState(
        {
            userName:"",
            password:"",
        }
    )

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: value,
          };
        });
    }

    function handleLogin() {
        const {userName, password} = loginData;
        if(!userName || !password) {
            alert("Please fill all fields")
        }
        else if(userName && password) {
            let flag = false;
            let data = localStorage.getItem("user");
            if (!data) {
                let arr = [];
                localStorage.setItem("user", JSON.stringify(arr));
                data = localStorage.getItem("user");
            }

            let temp = JSON.parse(data);
            temp.forEach((ele) => {
                if (ele.userName === loginData.userName && ele.password === loginData.password) {
                flag = true;
                setFname(loginData.userName)
                setDate(new Date(ele.date))
                navigate('/dashboard')
                
                }
            });

            if (!flag) {
                alert("No such details found ")
            }

        }
            
                
    }

  return (
    <div id="login-div">
        <div className="login-container">
      <p className="welcome-text">Welcome !</p>
      <p className="sign-up-text">Sign in to</p>
      <p>My website</p>

      <div className="form-container">
        
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => {
            handleChange(e);
          }}
          name="userName"
          value={loginData.userName}
          
        />
        <label htmlFor="userName">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="password"
          value={loginData.password}
        />
        <div className="checkbox-div">
            <div className="checkbox-text">
            <input 
                type="checkbox" 
                id="check" 
                
                name="check"
            />
            <span>Remember me</span>
            </div>
            <p id="forgot-text" onClick={()=>{navigate('/')}}>Forgot Password ?</p>
        </div>
        
        <button className="register-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className="bottom-text">
        Don'y have an Account ?<span className="login-text" onClick={()=>{navigate('/')}}>Register</span>
      </p>
    </div>
    </div>
  );
}
