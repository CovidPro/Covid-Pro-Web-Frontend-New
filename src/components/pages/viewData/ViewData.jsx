import React from 'react';
import Sidebar from "../../Sidebar/Sidebar";
import IndexNavbar from "../../Navbars/IndexNavbar";
import CardButtons from "../../Cards/CardButtons";

function ViewData() {

    return (
        <div>
            <IndexNavbar fixed/>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <div className="FaceMask">
                    <div className="flex items-center justify-center mt-20">
                    <div
                        className="container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Customer List"
                                statDescripiron="/stafflist"
                            />

                        </div>
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Staff List"
                                statDescripiron="/customerlist"
                            />
                        </div>
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Positive Cases"
                                statDescripiron="/covidcases"
                            />
                        </div>
                        <div className="w-1/2 md:w-full  p-3">
                            <CardButtons
                                statTitle="Daily Report"
                                statDescripiron="/dailyreport"
                            />
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ViewData;
