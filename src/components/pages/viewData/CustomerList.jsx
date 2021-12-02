import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import CustomerCard from "./CustomerCard";
import IndexNavbar from "../../Navbars/IndexNavbar";
import Sidebar from "../../Sidebar/Sidebar";
import CardTable from "../../Cards/CardTable";

class CustomerList extends Component {
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
            customerList = customers.map((customer, k) => <CustomerCard customer={customers[k]} key={k}/>);
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
                            <CardTable
                                title="Customer List"

                            />
                            <div className="list">{customerList}</div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default CustomerList;