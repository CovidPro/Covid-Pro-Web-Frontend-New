import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Dashboard () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);
    return (
        <div>
            {userData.user ? (
                <div className="Dashboard">
                    <h1>Welcome to {userData.user.shopName}</h1><br/><br/>
                    {console.log(userData.user)}
                    <a className="btn btn-primary" href="/facemask" role="button"> Checking Process </a><br/><br/>
                    <a className="btn btn-primary" href="/viewdata" role="button"> View Data </a><br/><br/>
                    <a className="btn btn-primary" href="/announcement" role="button"> Announcements </a><br/><br/>
                </div>
            ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}

export default Dashboard;