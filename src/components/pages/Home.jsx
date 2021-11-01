import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    // If use not exists
    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);

    return (
        <div>
            {userData.user ? (
                <>
                    {console.log(userData.user)}
                    {console.log(userData.user.shopName)}
                    {console.log(userData.user.shopOwner)}
                    <h1>Welcome {userData.user.shopName}</h1>
                    <Link to="/dashboard">Dashboard</Link>
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
 
export default Home;