import React, { useState } from 'react';
import "./log.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setLogged, setUsername } from './action';
import { connect } from 'react-redux';

const Registration = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    username: "",
    email: "",
    mobile: "",
    gender: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value
    });
  };

  const submituserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUsername(fields.username);
      const data = {
        name: fields.username,
        email: fields.email,
        mobile: fields.mobile,
        gender: fields.gender,
        password: fields.password
      };
      
      axios.post('http://127.0.0.1:8080/api/v1/auth/register', data);
      setFields({
        username: "",
        email: "",
        mobile: "",
        gender: "",
        password: ""
      });
      alert("Your registration has been completed successfully.");
      navigate("/");
      setLogged(true);      
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (fields.mobile) {
      if (!fields.mobile.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors.mobile = "*Please enter a valid mobile no.";
      }
    }

    if (fields.password) {
      if (!fields.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/)) {
        formIsValid = false;
        errors.password = "*Please enter secure and strong password.";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <>
      <div className="login">
        <form onSubmit={submituserRegistrationForm}>
          <label className="label">Sign up</label>
          <input type="text" name="username" value={fields.username} placeholder="User name" onChange={handleChange} required />
          <div className="errorMsg">{errors.username}</div>

          <input type="email" name="email" value={fields.email} placeholder="Email" onChange={handleChange} required />
          <div className="errorMsg">{errors.email}</div>

          <input type="number" name="mobile" value={fields.mobile} placeholder="Mobile Number" onChange={handleChange} required />
          <div className="errorMsg">{errors.mobile}</div>

          <select name="gender" onChange={handleChange}>
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input type="password" name="password" value={fields.password} placeholder="Password" onChange={handleChange} required />
          <div className="errorMsg">{errors.password}</div>

          <button>Sign up</button>
          <Link style={{ textDecoration: "none" }} to="/">
            <button>Back</button>
          </Link>
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
  setLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
