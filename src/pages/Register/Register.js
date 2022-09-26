import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputField, setInputField] = useState({
    email: '',
    uname: '',
    pass: ''
  })
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const errors = {
    email: "Invalid Email",
  };

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
    if (!isValidEmail(inputField.email)) {
      setErrorMessages({ name: "email", message: errors.email });
    } else {
      setIsSubmitted(true);
    }

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // JSX code for signup form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" defaultValue={inputField.email} onChange={handleChange} required />
          {renderErrorMessage("email")}
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