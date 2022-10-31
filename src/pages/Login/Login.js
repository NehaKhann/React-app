
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import "./Login.css"

function Login() {
  const navigate = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  // User Login info
  const database = [
    {
      email: "user1@gmail.com",
      password: "pass1"
    },
    {
      email: "user2@gmail.com",
      password: "pass2"
    }
  ];

  const errors = {
    email: "Invalid Email",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        localStorage.setItem("authenticated", true);
        navigate("/home");
      }
    } else {
      // Email not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  return (
    <div className="login-form">
      <Form style={{ width: '50%', height: '50%' }}>
        <div className="col-md-12  text-center">
          <h1>LOGIN</h1>
        </div>
        <div style={{  alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

          <div style={{ width: '40%' }}>
            <Form.Group className="mb-2" controlId="formBasicEmail" >
              <Form.Label>Email Address</Form.Label>
              <Form.Control className='p-2' type="email" placeholder="Enter email" name="email" />
              {renderErrorMessage("email")}
            </Form.Group>
          </div>
          <div style={{ width: '40%', alignSelf: 'center' }}>
            <Form.Group className="mb-2" controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control className='p-2' type="password" placeholder="Password" name="pass" />
              {renderErrorMessage("pass")}
            </Form.Group>
          </div>
          <div className="d-grid gap-2 mb-2" style={{ width: '30%', marginTop: '5%' }}>
            <button type="submit" onClick={handleSubmit} className="btn btn-success" >Login</button>
          </div>

          <div className="d-grid gap-2" style={{ width: '30%', marginTop: '2%' }}>
            <Button onClick={() => navigate("/register")} variant="primary" >
              Create an Account
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;