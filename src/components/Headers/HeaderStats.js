import React from "react";
import axios from "axios";

import CardStats from "components/Cards/CardStats.js";

export default class HeaderStats extends React.Component {
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

        let NumofCustomers = 0;
        let NumofStaff = 0;

        const customers = this.state.customers;
        console.log("PrintCustomer: " + customers);
        let customerList;

        if (!customers) {
            customerList = "there is no customer recored!";
        } else {
            var begindate = new Date();
            begindate.setUTCHours(0, 0, 0, 0);
            begindate = begindate.toISOString();


            customerList = customers.map((customer, k) => {
                if (customer.timestamp < begindate) {
                    if (customer.status === "customer") {
                        NumofCustomers = NumofCustomers + 1;
                    } else if (customer.status === "staff") {
                        NumofStaff++;
                    }
                }
            });
            console.log(customerList);
        }


        return (
            <>
                {/* Header */}
                <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* Card stats */}
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                                    {console.log("customer:" + NumofCustomers)}
                                    {console.log("staff:" + NumofStaff)}
                                    <CardStats
                                        statSubtitle="Today Customers"
                                        statTitle={NumofCustomers}
                                        statArrow="up"
                                        statPercent="3.48"
                                        statPercentColor="text-emerald-500"
                                        statDescripiron="Since last month"
                                        statIconName="far fa-chart-bar"
                                        statIconColor="bg-red-500"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardStats
                                        statSubtitle="Today Staff"
                                        statTitle={NumofStaff}
                                        statArrow="down"
                                        statPercent="3.48"
                                        statPercentColor="text-red-500"
                                        statDescripiron="Since last week"
                                        statIconName="fas fa-chart-pie"
                                        statIconColor="bg-orange-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
