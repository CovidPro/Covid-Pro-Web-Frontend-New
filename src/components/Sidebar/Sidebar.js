/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import AuthOptions from "../auth/AuthOptions";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");



    return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-0">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto ">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Covid Pro
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Covid Pro
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <div className="px-6">
              <hr className="my-4 md:min-w-full"/>
            </div>
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline px-6">
              Admin Layout Pages
            </h6>






            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none px-6">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/viewdata") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/viewdata"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  View Data
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/facemask") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/facemask" target="_blank"
                >
                  <i
                    className={
                      "fas fa-chalkboard-teacher mr-2 text-sm " +
                      (window.location.href.indexOf("/facemask") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Checking Process
                  <span className="mr-4"> <i className="fas fa-external-link-alt"></i></span>
                </Link>
              </li>

                <li className="items-center">
                    <Link
                        className={
                            "text-xs uppercase py-3 font-bold block " +
                            (window.location.href.indexOf("/announcement") !== -1
                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                : "text-blueGray-700 hover:text-blueGray-500")
                        }
                        to="/announcement"
                    >
                        <i
                            className={
                                "fas fa-chalkboard-teacher mr-2 text-sm " +
                                (window.location.href.indexOf("/announcement") !== -1
                                    ? "opacity-75"
                                    : "text-blueGray-300")
                            }
                        ></i>{" "}
                        Announcement
                        <span className="mr-4"></span>
                    </Link>
                </li>

            </ul>

            {/*

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Register
                </Link>
              </li>
            </ul>











            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/landing"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Landing Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/profile"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profile Page
                </Link>
              </li>
            </ul>






            */}

            {/* Divider */}
            <div className="px-6">
              <hr className="my-4 md:min-w-full"/>
            </div>
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline px-6">
              View Data
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 px-6">
              <li className="items-center">
                <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/dailyreport") !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/dailyreport"
                >
                  <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (window.location.href.indexOf("/dailyreport") !== -1
                            ? "opacity-75"
                            : "text-blueGray-300")
                      }
                  ></i>{" "}
                  Daily Report
                </Link>
              </li>



              <li className="items-center">
              <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/covidcases") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/covidcases"
              >
                <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/covidcases") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                    }
                ></i>{" "}
                Positive Cases
              </Link>
            </li>


              <li className="items-center">
              <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/stafflist") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/stafflist"
              >
                <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/stafflist") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                    }
                ></i>{" "}
                Staff List
              </Link>
            </li>


              <li className="items-center">
              <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/customerlist") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/customerlist"
              >
                <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/customerlist") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                    }
                ></i>{" "}
                Customer List
              </Link>
            </li>






                {/* Divider */}
                <div className="">
                    <hr className="my-4 md:min-w-full"/>
                </div>

                {/* Navigation */}
                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 ">

                        <AuthOptions />

                </ul>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
