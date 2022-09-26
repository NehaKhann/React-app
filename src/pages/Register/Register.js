import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputField, setInputField] = useState({
    email: '',
    uname: '',
    pass: ''
  })


  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputField((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setIsSubmitted(true);
  };

  // JSX code for signup form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" defaultValue={inputField.email} onChange={handleChange} required />
        </div>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" defaultValue={inputField.uname} onChange={handleChange} required />
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" defaultValue={inputField.pass} onChange={handleChange} required />

        </div>
        <div className="button-container">
          <input type="submit" />
        </div>

        <div className="bottom-container">
          <p>Already have an account? </p>
          <button onClick={() => navigate("/login")}> Login</button>
        </div>

      </form>
    </div>
  );

  return (
    <div className="register">
      <div className="register-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>{inputField.uname} is successfully Registered </div> : renderForm}
      </div>
    </div>
  );
}

export default Register;