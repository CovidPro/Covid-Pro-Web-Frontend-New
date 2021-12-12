import React, {useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import UserContext from '../../context/userContext';
import Sidebar from "../Sidebar/Sidebar";
import HeaderStats from "../Headers/HeaderStats";
import MainButton from "../layout/MainButton";

function Dashboard() {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user)
            history.push("/login");

    }, []);


    return (
        <div>
            {userData.user ? (
                <div className="Dashboard">

                    <Sidebar/>
                    <div className="relative md:ml-64 bg-blueGray-100">

                        <HeaderStats/>
                        <MainButton/>

                    </div>
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
