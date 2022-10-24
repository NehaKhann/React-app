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
                <div className="center">
                    <div>

                        <Form className="checkout-form center-form" >
                            <h4>Contact Information</h4>
                            <div className="field1">
                                <Form.Group className="mb-2 " controlId="formBasicPassword">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter contact number" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword" style={{ marginLeft: 20 }}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </div>
                            <h4>Payment Details</h4>
                            <div className="field1">
                                <Form.Group className="m-2" controlId="formBasicPassword">
                                    <Form.Label style={{ marginTop: 5 }}>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="Card Number" />
                                    <Form.Label style={{ marginTop: 10 }}>Expiration Month</Form.Label>
                                    <Form.Control type="text" placeholder="Expiration Month" />
                                </Form.Group>
                                <Form.Group className="m-2" controlId="formBasicPassword">
                                    <Form.Label style={{ marginTop: 5 }}>CVN</Form.Label>
                                    <Form.Control type="text" placeholder="CVN" />
                                    <Form.Label style={{ marginTop: 10 }}>Expiration Year</Form.Label>
                                    <Form.Control type="text" placeholder="Expiration Year" />
                                </Form.Group>
                            </div>
                            <div className="center-form-button">
                                <Button style={{ width: 150 }} onClick={() => navigate("/home")} className="m-2" variant="light" size="md">
                                    Back to Home
                                </Button>
                                <Button style={{ width: 150 }} onClick={() => navigate("/home")} className="m-2" variant="success" size="md">
                                    Pay
                                </Button>
                            </div>


                        </Form>
                    </div>
                </div>
            </div>

        );
    }
};
export default Checkout;