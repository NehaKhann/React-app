import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavComp from "../../components/Navbar"
import { FaExclamation, FaShoppingBasket } from "react-icons/fa"
import { Button } from "react-bootstrap";

import "./Home.css"
const Home = () => {
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
            <div className="home-main-screen">
                < NavComp />
                <div className="col-md-12 text-center home-middle-screen">
                    <h2>WELCOME USER<FaExclamation /></h2>
                    <Button size='lg' onClick={() => navigate("/camera")} variant="success"> Shopping  <FaShoppingBasket /> </Button>
                </div>
            </div>

        );
    }
};
export default Home;