import React, {Component, useState} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

import IndexNavbar from "../../Navbars/IndexNavbar";
import Sidebar from "../../Sidebar/Sidebar";
import CardTableDaily from "../../Cards/CardTableDaily";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

        return (
            <>
                <IndexNavbar fixed/>
                <Sidebar/>
                <div className="relative md:ml-64 bg-blueGray-100">

                    <div className="ShowCustomerList mt-20">
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
                                </div>
                            </form>

                            <CardTableDaily
                                title="Daily Report for Staff"
                                customers={customers}
                                userStatus="staff"
                                startdate={this.state.startDate}
                            />

                            <CardTableDaily
                                title="Daily Report for Customer"
                                customers={customers}
                                userStatus="customer"
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
