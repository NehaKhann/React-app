import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavComp from "../../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

import "./Checkout.css"
const Checkout = () => {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    const [pageLoad, setpageLoad] = useState(true)
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
        setpageLoad(false)
    }, []);

    if (pageLoad == false && !authenticated) {
        // Redirect
        return <Navigate replace to="/login" />;
    } else {
        return (
            <div className="checkout-main-screen">
                <NavComp />

                <Form className="checkout-form">
                    <h4>Contact Information</h4>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <h4>Shipping Address</h4>
                    <div className="field1">
                    <Form.Group className="m-2 " controlId="formBasicPassword">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                    </Form.Group>
                    <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                    </div>
                    <h4>Payment Details</h4>
                    <div className="field1">
                    <Form.Group className="m-2 " controlId="formBasicPassword">
                        <Form.Label>Card Type</Form.Label>
                        <Form.Control type="text" placeholder="Visa or MasterCard" />
                    </Form.Group>
                    <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Card Number" />
                    </Form.Group>
                    <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Expiration Month</Form.Label>
                        <Form.Control type="text" placeholder="Expiration Month" />
                        </Form.Group>
                        <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Expiration Year</Form.Label>
                        <Form.Control type="text" placeholder="Expiration Year" />
                    </Form.Group>
                    <Form.Group className="m-2 " controlId="formBasicPassword">
                        <Form.Label>CVN</Form.Label>
                        <Form.Control type="text" placeholder="CVN" />
                    </Form.Group>
                    </div>


               
      <Button onClick={() => navigate("/home")} className="m-2" variant="light" size="md">
     Back to Home
      </Button>
      <Button onClick={() => navigate("/home")} className="m-2" variant="success" size="md">
     Pay
      </Button>
 

                </Form>
            </div>

        );
    }
};
export default Checkout;