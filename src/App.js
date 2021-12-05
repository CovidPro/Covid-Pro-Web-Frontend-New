import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';


import Dashboard from './components/pages/Dashboard';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserContext from './context/userContext';

import ScanFaceMask from "./components/pages/Check/ScanFaceMask";
import ScanTemprature from "./components/pages/Check/ScanTemprature";
import QR from "./components/pages/Check/qr";

import Announcement from "./components/pages/Announcement/announcement";
import GetUserData from "./components/pages/viewData/GetUserData";
import CustomerList from "./components/pages/viewData/CustomerList";
import StaffList from "./components/pages/viewData/StaffList";
import CovidCases from "./components/pages/viewData/covidcases";
import DailyReport from "./components/pages/viewData/DailyReport";


import ViewData from "./components/pages/viewData/ViewData";

import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";



function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          {/*<Header />*/}
          <br/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/facemask" component={ScanFaceMask} />
            <Route path="/viewdata" component={ViewData} />
            <Route path="/next" component={ScanTemprature} />
            <Route path="/qr" component={QR} />
            <Route path="/announcement" component={Announcement} />
            <Route path="/getuserdata" component={GetUserData} />
            <Route path="/customerlist" component={CustomerList} />
            <Route path="/stafflist" component={StaffList} />
            <Route path="/covidcases" component={CovidCases} />
            <Route path="/dailyreport" component={DailyReport} />


            {/* add routes with layouts */}
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            {/* add routes without layouts */}
            <Route path="/landing" exact component={Landing} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Index} />
            {/* add redirect for first page */}
            <Redirect from="*" to="/" />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;