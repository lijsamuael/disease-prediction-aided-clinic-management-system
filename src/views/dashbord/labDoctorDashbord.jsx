import React from "react";
import { Outele, Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function LabDoctorDashbord(props) {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [numberIssued, setNumberIssued] = useState(0);
  const [numberConfirmed, setNumberConfirmed] = useState(0);

  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );

  useEffect(() => {
    const issuedPrescriptions = prescriptions.filter(
      (prescription) => prescription.status === "issued"
    );
    const issuedNumber = issuedPrescriptions.length;
    setNumberIssued(issuedNumber);

    const confirmedPrescriptions = prescriptions.filter(
      (prescription) => prescription.status === "confirmed"
    );
    const confirmedNumber = confirmedPrescriptions.length;
    setNumberConfirmed(confirmedNumber);
  }, [prescriptions, currentUser]);

  return (
    <>
      <div x-data="setup()" className="bg-black">
        <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-black bg-white dark:bg-gray-700 dark:text-white">
          {/* <!-- Header --> */}
          <div className="fixed z-10 flex items-center justify-between w-full text-white h-14">
            <div className="flex items-center justify-start pl-3 bg-blue-800 border-none md:justify-center w-14 md:w-64 h-14 dark:bg-gray-800">
              <img
                className="relative object-cover w-10 h-10 mr-2 rounded-full"
                src="images/defaultProfile.jpg"
                alt=""
              />

              <div>
                <p className="font-medium leading-4 group-hover:text-indigo-400">
                  Labratoriest
                </p>
                <span className="text-xs text-slate-400">
                  {currentUser.username}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end bg-blue-800 h-14 dark:bg-gray-800 header-right">
              <ul className="flex items-center">
                <li>
                  <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center mr-4 hover:text-blue-100"
                  >
                    <span className="inline-flex mr-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </span>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="fixed left-0 z-10 flex flex-col h-full text-white transition-all duration-300 border-none top-14 w-14 hover:w-64 md:w-64 bg-primary dark:bg-gray-900 sidebar">
            <div className="flex flex-col justify-between flex-grow overflow-x-hidden overflow-y-auto">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="hidden px-5 md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Main
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to=""
                    className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
                  >
                    <span className="inline-flex items-center justify-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Dashboard
                    </span>
                  </Link>
                </li>

                <li></li>
                <li></li>
              </ul>
              <p className="hidden px-5 py-3 text-xs text-center mb-14 md:block">
                Copyright @2023
              </p>
            </div>
          </div>

          <div className="h-full mb-10 ml-14 mt-14 md:ml-64 ">
            <div className="flex flex-wrap justify-center my-5 ml-4 mr-4 -mx-2 ">
              <div className="w-full p-2 md:w-1/2 lg:w-1/2 ">
                <div className="flex flex-row items-center w-full p-3 bg-blue-500 rounded-md dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500">
                  <div className="flex items-center flex-none w-8 h-8 p-2 text-indigo-500 bg-white rounded-md dark:text-white md:w-12 md:h-12 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="object-scale-down transition duration-500 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                    <div className="text-2xl whitespace-nowrap">
                      Issued Lab Orders
                    </div>
                    <div className="">{numberIssued}</div>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/2">
                <div className="flex flex-row items-center justify-between w-full p-3 bg-blue-500 rounded-md dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500">
                  <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="object-scale-down transition duration-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                    <div className="text-2xl whitespace-nowrap">
                      Confirmed Lab Orders
                    </div>
                    <div className="">{numberConfirmed}</div>
                  </div>
                </div>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js"
        defer
      ></script>
    </>
  );
}
