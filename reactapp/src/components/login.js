import React from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { setUsername, setPassword, setEmails, setLogged} from "./action";
import "./log.css";
import axios from "axios";

const Login = ({ username, email, password, setUsername, setEmails, setPassword,setLogged }) => {
 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmails(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };

  const handleShowAlert = async(e) => {
    e.preventDefault();
      const data = {
        email: email,
       password: password
      };
      try{
      const response = await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',data)
      .then((response)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data.token);
        console.log(localStorage.getItem('token'));
      })      
      setLogged(true);
      alert("Login Successful."+username);
       navigate("/search");
      
      }
      catch(error){
        alert("Invalid Password");
      }

  };

  const navigate = useNavigate();

  return (
    <>
      
      <div className="login">
        <form onSubmit={handleShowAlert}>
            <label className="label">Login</label>
            <input 
              value={username} 
              type="text" 
              name="name" 
              placeholder="UserName" 
              onChange={handleUsernameChange}
              required 
            />

            <input 
              value={email} 
              type="email" 
              name="email" 
              placeholder="Email" 
              onChange={handleEmailChange}
              required 
            />

            <input 
              value={password} 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handlePasswordChange}
              required 
            />    
            <button>Login</button>
           
            <h6>Don't have an account?</h6>
            <Link style={{textDecoration:"none"}} to="/reg"><button>Sign up</button></Link>
          </form> 
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
  password: state.password, 
  logged: state.logged,
});

const mapDispatchToProps = {
  setUsername,
  setEmails,
  setPassword,
  setLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);