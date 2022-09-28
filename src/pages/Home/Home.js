import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavComp from "../../components/Navbar"
import "./Home.css"
const Home = () => {
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

                <div className="home-middle-screen">
                    <h3>Welcome User</h3>

                </div>
            </div>


        );
    }
};
export default Home;