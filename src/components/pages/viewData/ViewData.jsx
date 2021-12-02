import React, {useEffect, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Sidebar from "../../Sidebar/Sidebar";
import HeaderStats from "../../Headers/HeaderStats";
import MainButton from "../../layout/MainButton";
import IndexNavbar from "../../Navbars/IndexNavbar";
import CardStats from "../../Cards/CardStats";
import CardButtons from "../../Cards/CardButtons";

function ViewData() {
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
            <IndexNavbar fixed/>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">


                {/*{userData.user ? (*/}
                <div className="FaceMask">
                    {console.log("Mask")}
                    {console.log(userData.user)}
                    {/*
                    <h1>View Data</h1><br/><br/>
                    <a className="btn btn-primary" href="/stafflist" role="button"> Staff Info </a><br/><br/>
                    <a className="btn btn-primary" href="/customerlist" role="button"> Customer Data </a><br/><br/>
                    <a className="btn btn-primary" href="/covidcases" role="button"> Potential Covid
                        Cases </a><br/><br/>
                    <a className="btn btn-primary" href="/dailyreport" role="button"> Daily Report </a><br/><br/>
                    */}

                    <div className="flex items-center justify-center ">
                    <div
                        className="container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Customer List"
                                statDescripiron="/stafflist"
                            />

                        </div>
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Staff List"
                                statDescripiron="/customerlist"
                            />
                        </div>
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Positive Cases"
                                statDescripiron="/covidcases"
                            />
                        </div>
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Daily Report"
                                statDescripiron="/dailyreport"
                            />
                        </div>

                    </div>
                </div>
                </div>
                {/*} ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )
            }*/}
            </div>
        </div>
    );
}

export default ViewData;