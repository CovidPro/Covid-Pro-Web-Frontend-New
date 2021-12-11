import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import axios from "axios";

export default function CardRowPositive({
     color,
    customerp,
    idNum,
    name,
    phoneNumber,
    email,
    lastDate,
    status,
    userStatus
}) {

    function handleClick() {
        console.log("Hi")
        axios
            .post('http://localhost:5000/customers/msg', {
                id: customerp._id,
                msg: "Your account has been approved",
                msg2: "Your account has been rejected"
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleClick2() {
        console.log("Hi")
        axios
            .post('http://localhost:5000/customers/cre', {
                msg: "Your account has been rejected",
                msg2: "Your account has been approved",
                email :customerp.email+"a",
                status: "staff",
                idNumber : customerp.idNumber+"1",
                nic : customerp.nic+"1",
                name : customerp.name,
                fullname : customerp.fullname,
                password : customerp.password,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleDelete() {
        console.log("idNum : " + customerp._id)
        axios
            .delete('http://localhost:5000/customers/delete', {
                data: {
                    id: customerp._id,
                }
            }
            )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .post('http://localhost:5000/customers/cre', {
                msg: "Your account has been rejected",
                msg2: "Your account has been approved",
                email :customerp.email+" ",
                status: customerp.status,
                idNumber : customerp.idNumber,
                nic : customerp.nic,
                name : customerp.name,
                fullname : customerp.fullname,
                password : customerp.password,
                address: customerp.address,
                contactNo: customerp.contactNo,
                updatedQRAt: customerp.updatedQRAt,
                notification: customerp.notification,
                positive: customerp.positive,
                timestamp: customerp.timestamp,
                notificationRead: customerp.notificationRead,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    if (customerp.positive === true) {
        if (status === userStatus) {
            return (

                <tr>
                    {console.log("Customer in table")}
                    {console.log(customerp)}
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        {/*<img
                        src={require("assets/img/bootstrap.jpg").default}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                    ></img>*/}
                        <span
                            className={
                                "ml-3 font-bold " +
                                +(color === "light" ? "text-blueGray-600" : "text-white")
                            }
                        >
                    {idNum}
                  </span>
                    </th>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {name}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {/*<i className="fas fa-circle text-orange-500 mr-2"></i>*/}
                        {phoneNumber}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {email}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {lastDate}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <button className="btn btn-outline-warning float-right" onClick={handleClick2}>Send</button>
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <button className="btn btn-outline-warning float-right" onClick={handleDelete}>Reject</button>
                    </td>

                </tr>

            )
        } else {
            return (
                <></>
            )
        }
    }
    else {
        return (
            <></>
        )
    }
}

CardRowPositive.defaultProps = {
    color: "light",
    title: "",
}

