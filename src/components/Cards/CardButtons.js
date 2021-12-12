import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function CardButtons({
                                        statSubtitle,
                                        statTitle,
                                        statDescripiron,
                                        statIconName,
                                        statIconColor,
                                    }) {
    return (
        <>
            <Link to={statDescripiron}
                  className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">

                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {statSubtitle}
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
                        </div>

                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    statIconColor
                                }
                            >
                                <i className={statIconName}></i>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </>
    );
}

CardButtons.defaultProps = {
    statSubtitle: "        ",
    statTitle: "350,897",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
};

CardButtons.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconName: PropTypes.string,
    statIconColor: PropTypes.string,
};
