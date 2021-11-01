import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';

function ScanFaceMask () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(userData.user === null) {
            {console.log("NUll")}
            history.push('/');
        }
    }, [userData.user, history]);


    return (
        <div>
            {userData.user ? (
                <div className="FaceMask">
                    {console.log("Mask")}
                    {console.log(userData.user)}
                    <h1>Scan Face Mask</h1><br/><br/>
                    <a className="btn btn-primary" href="/next" role="button"> Checking Process </a><br/><br/>
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

export default ScanFaceMask;