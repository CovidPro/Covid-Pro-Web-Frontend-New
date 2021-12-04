import React, {Component, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PositiveCard from "./PostiveCard";
import ViewDataCard from "./ViewDataCard";
import IndexNavbar from "../../Navbars/IndexNavbar";
import Sidebar from "../../Sidebar/Sidebar";
import CardTable from "../../Cards/CardTable";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTableDaily from "../../Cards/CardTableDaily";

class DailyReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            customers: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/customers/getall")
            .then((res) => {
                this.setState({
                    customers: res.data,
                });
            })
            .catch((err) => {
                console.log("Error from ShowCustomerList");
            });
    }

    handleChange(date,e) {
        this.setState({
            startDate: date
        })
        e.preventDefault();
        console.log(this.state.startDate)
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate)
    }

    render() {
        const customers = this.state.customers;
        console.log("PrintCustomer: " + customers);
        let customerList;

        if (!customers) {
            customerList = "there is no customer recored!";
        } else {
            //if (customers.status === "customer") {
            var begindate = new Date();
            this.state.startDate.setUTCHours(0,0,0,0);
            begindate = begindate.toISOString();
            customerList = customers.map((customer, k) => <ViewDataCard customer={customers[k]} key={k} date={begindate}/>);
            //}
        }


        return (
            <>
                <IndexNavbar fixed/>
                <Sidebar/>
                <div className="relative md:ml-64 bg-blueGray-100">

                    <div className="ShowCustomerList">
                        <div className="container">
                            <div className="row">


                                <div className="col-md-11">

                                    <br/>
                                    <hr/>
                                </div>
                            </div>

                            <div inline-datepicker data-date="02/25/2022"></div>

                            <form onSubmit={ this.onFormSubmit }>
                                <div className="form-group">
                                    <DatePicker
                                        selected={ this.state.startDate }
                                        onChange={ this.handleChange }
                                        name="startDate"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                    {/*<button className="btn btn-primary">Show Date</button>*/}
                                </div>
                            </form>

                            <CardTableDaily
                                title="Daily Report"
                                customers={customers}
                                userStatus="staff"
                                startdate={this.state.startDate}
                            />

                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default DailyReport;
