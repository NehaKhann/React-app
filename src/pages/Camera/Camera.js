import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavComp from "../../components/Navbar";


import "./Camera.css"
const Camera = () => {
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
            <div className="camera-main-screen">
                <NavComp />
                <h1>Camera screen</h1>

            </div>

        );
    }
};
export default Camera;