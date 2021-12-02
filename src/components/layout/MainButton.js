import React from "react";

// components

import CardButtons from "components/Cards/CardButtons.js";
import axios from "axios";
import ViewDataCard from "../pages/viewData/ViewDataCard";

export default class MainButton extends React.Component {


    render() {

        return (
            <>
                {/* Header */}
                <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* Card stats */}
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                                    <CardButtons
                                        statSubtitle="Today Customers"
                                        statTitle="View Data"
                                        statDescripiron="/viewdata"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardButtons
                                        statSubtitle="Today Staff"
                                        statTitle="Checking Process"
                                        statDescripiron="/viewdata"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <CardButtons
                                        statSubtitle="Today Staff"
                                        statTitle="Announcement"
                                        statDescripiron="/viewdata"
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
