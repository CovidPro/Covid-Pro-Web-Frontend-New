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

    if (customerp.positive === false) {
        if (customerp.status === "customer") {
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
                        <button className="btn btn-outline-warning float-right" onClick={handleClick}>Send</button>
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <button className="btn btn-outline-warning float-right" onClick={handleClick}>Reject</button>
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

