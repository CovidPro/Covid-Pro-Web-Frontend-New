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

                    <div className="flex items-center justify-center mt-20">
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

// Coronavirus Disease 2019 or Covid-19 was first reported in Wuhan, China on December 2019.
// Since then Covid -19 has spread rapidly across the globe leading to pandemic.
// The virus is now affecting more than 200,000 people globally.

// First you are a new user you need to register as shop.
// Once you login you will be redirected to Dashboard.
// If not you can login using email and password.
//
// After you logged in you will be redirected to Dashboard.
// In Web app there are 3 main functionalities.
// 1. Checking Process
// 2. View Data
// 3. Announcement
//
// Checking Process
// This will be opened in a new tab and it is recommended to put in full screen.
// First it will check if you have wear mask or not.
// Then if you wear your mask correctly it will show separate QR codes for customer and staff.
// Once you Scan that person will asked to sanitize their hands.
// When they do that a contact less temperature sensor is taking temperature of person.
// Once they completed person can enter to the shop.
// If one step failed, process will be redirected to Face Mask check and Beep sound will be played to staff member can check on the person.
//
// View Data
// There are 4 methods to view data.
// 1. Staff List
// 2. Customer List
// 3. Potential Covid Cases
// 4. Daily Report
//
// Staff List
// This will show all the data about the staff.
//
// Customer List
// This will show all the data about the customer.
//
// Potential Covid Cases
// If a customer or staff mark them as covid positive through their mobile phone their data will be shown in here.
// So the shop owner can check them and take necessary actions.
// which is contacting the customer or staff and clarify the situation.
// After that the shop owner can send a message to the customers and staff which came to the shop within last 3 days.
//
// Daily Report
// This will show the data of customers and staffs who came to the shop Day by Day.
//
// Finally you can logout from the app.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//