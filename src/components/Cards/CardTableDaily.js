import React from "react";
import PropTypes from "prop-types";

import CardRowDaily from "./CardRowDaily";

export default function CardTableDaily({
                                           color,
                                           title,
                                           customers,
                                           userStatus,
                                           startdate
                                       }) {

    let customersList;

    console.log(customers);

    var enddate = new Date(startdate);
    enddate.setDate(enddate.getDate() + 1);
    enddate = enddate.toISOString();

    startdate.setUTCHours(0, 0, 0, 0);
    startdate = startdate.toISOString();


    console.log("SDSSDSDSDS");
    console.log(startdate);
    console.log(enddate);
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    {console.log(customers)}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                Licence ID
                            </th>

                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                Name
                            </th>

                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                Phone Number
                            </th>

                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                Email
                            </th>

                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                                Last Date in Shop
                            </th>

                            <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                            >
                            </th>
                        </tr>
                        </thead>

                        <tbody>

                        {
                            customers.map((customer, k) => <CardRowDaily
                                customerp={customers[k]}
                                key={k}
                                idNum={customers[k].idNumber || customers[k].nic}
                                name={customers[k].name || customers[k].fullname}
                                phoneNumber={customers[k].phoneNumber || customers[k].contactNo}
                                email={customers[k].email}
                                lastDate={customers[k].timestamp}
                                status={customers[k].status}
                                userStatus={userStatus}
                                startdate={startdate}
                                enddate={enddate}
                            />)
                        }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

CardTableDaily.defaultProps = {
    color: "light",
};

CardTableDaily.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
