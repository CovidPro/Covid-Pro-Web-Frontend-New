import React, {useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import UserContext from '../../context/userContext';
import Dashboard from "./Dashboard";
import IndexNavbar from "../Navbars/IndexNavbar";

function Home() {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    // If use not exists
    useEffect(() => {
        if (!userData.user)
            history.push("/login");

    }, []);

    return (
        <div>
            {userData.user ? (
                <>
                    <div className="pb-80 ...">
                        <IndexNavbar fixed/>
                        {console.log(userData.user)}
                        {console.log(userData.user.shopName)}
                        {console.log(userData.user.shopOwner)}
                        {/*<h1>Welcome {userData.user.shopName}</h1>*/}
                        <Dashboard/>
                        {/*<Link to="/dashboard">Dashboard</Link>*/}
                    </div>
                </>
            ) : (
                <>
                    <IndexNavbar fixed/>
                    {/*Make home here and redirect to Login when button click*/}
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}

export default Home;
