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
                <>
                    <h1>Welcome to {userData.user.shopName}</h1>
                    {console.log(userData.user)}
                    <input type="submit" value="Register" className="btn btn-primary" /><br/><br/>
                    <input type="submit" value="Register" className="btn btn-primary" /><br/><br/>
                    <input type="submit" value="Register" className="btn btn-primary" /><br/><br/>
                </>
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