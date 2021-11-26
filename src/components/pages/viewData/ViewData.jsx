import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';

function ViewData () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    /*
    useEffect(() => {
        console.log(userData);
        if(userData.user === null) {
            console.log('userData.user is null');
            {console.log("NUll")}
            history.push('/');
        }
    }, [userData.user, history]);
    */

    return (
        <div>
            {/*{userData.user ? (*/}
                <div className="FaceMask">
                    {console.log("Mask")}
                    {console.log(userData.user)}
                    <h1>View Data</h1><br/><br/>
                    <a className="btn btn-primary" href="/stafflist" role="button"> Staff Info </a><br/><br/>
                    <a className="btn btn-primary" href="/customerlist" role="button"> Customer Data </a><br/><br/>
                    <a className="btn btn-primary" href="/covidcases" role="button"> Potential Covid Cases </a><br/><br/>
                    <a className="btn btn-primary" href="/dailyreport" role="button"> Daily Report </a><br/><br/>
                </div>
            {/*} ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )
            }*/}
        </div>
    );
}

export default ViewData;