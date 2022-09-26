import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
            <div>
                <p>Welcome to your Home Screen</p>
            </div>
        );
    }
};
export default Home;