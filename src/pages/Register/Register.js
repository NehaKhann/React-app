import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import "./Register.css"

function Register() {
  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
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
    uname: "Username can't be empty",
    pass: "Password can't be empty"
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
    }

    else if (!inputField.uname) {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    else if (!inputField.pass) {
      setErrorMessages({ name: "pass", message: errors.pass });
    }
    else {
      alert("Successfully Registered")
      navigate("/login");
    }

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="register-form">
      <Form style={{ width: '50%', height: '50%' }}>
        <div className="col-md-12 mb-4 text-center">
          <h1>SIGN UP</h1>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '40%' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Email Address</Form.Label>
              <Form.Control className='p-2' type="email" placeholder="Enter email" name="email" defaultValue={inputField.email} onChange={handleChange} />
              {renderErrorMessage("email")}
            </Form.Group>
          </div>
          <div style={{ width: '40%' }}>

            <Form.Group className="mb-3" controlId="formBasicName" >
              <Form.Label>Username</Form.Label>
              <Form.Control className='p-2' type="text" placeholder="Enter Name" name="uname" defaultValue={inputField.uname} onChange={handleChange} />
              {renderErrorMessage("uname")}
            </Form.Group>
          </div>
          <div style={{ width: '40%' }}>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control className='p-2' type="password" placeholder="Password" name="pass" defaultValue={inputField.pass} onChange={handleChange} />
              {renderErrorMessage("pass")}
            </Form.Group>
          </div>
          <div style={{ width: '30%' }}>

            <div className="d-grid gap-2 mb-3">
              <button type="submit" onClick={handleSubmit} className="btn btn-success" >Register</button>
            </div>
            <div className="d-grid gap-2">
              <Button onClick={() => navigate("/login")} variant="primary" >
                Login
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Register;