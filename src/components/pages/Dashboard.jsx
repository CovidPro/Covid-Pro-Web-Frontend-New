import React, {useEffect, useContext} from 'react';
import {useHistory, Link, Switch, Route, Redirect} from 'react-router-dom';
import UserContext from '../../context/userContext';
import Sidebar from "../Sidebar/Sidebar";
import AdminNavbar from "../Navbars/AdminNavbar";
import HeaderStats from "../Headers/HeaderStats";
import Maps from "../../views/admin/Maps";
import Settings from "../../views/admin/Settings";
import Tables from "../../views/admin/Tables";
import FooterAdmin from "../Footers/FooterAdmin";
import axios from "axios";
import ViewDataCard from "./viewData/ViewDataCard";
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

                        <div className="px-4 md:px-10 mx-auto w-full -m-24">
                            <Switch>
                                <Route path="/admin/dashboard" exact component={Dashboard}/>
                                <Route path="/admin/maps" exact component={Maps}/>
                                <Route path="/admin/settings" exact component={Settings}/>
                                <Route path="/admin/tables" exact component={Tables}/>
                                <Redirect from="/admin" to="/admin/dashboard"/>
                            </Switch>
                            <FooterAdmin/>
                        </div>
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