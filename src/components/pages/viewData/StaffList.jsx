import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StaffCard from "./StaffCard";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
        };
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

    render() {
        const customers = this.state.customers;
        console.log("PrintCustomer: " + customers);
        let customerList;

        if (!customers) {
            customerList = "there is no customer recored!";
        } else {
            //if (customers.status === "customer") {
                customerList = customers.map((customer, k) => <StaffCard customer={customers[k]} key={k}/>);
            //}
        }

        return (
            <div className="ShowCustomerList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">Customers List</h2>
                        </div>

                        <div className="col-md-11">
                            <Link to="/create-book" className="btn btn-outline-warning float-right" >
                                + Add New Customer
                            </Link>
                            <br />
                            <hr />
                        </div>
                    </div>

                    <div className="list">{customerList}</div>
                </div>
            </div>
        );
    }
}

export default StaffList;
