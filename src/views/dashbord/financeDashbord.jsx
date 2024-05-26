import React from "react";
import { Outele, Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function FinanceDashbord(props) {

  const currentUser = useSelector((state) => state.currentUser.currentUser)
  const [numberIssued, setNumberIssued] = useState(0)
  const [numberConfirmed, setNumberConfirmed] = useState(0)
  const prescriptions = useSelector((state) => state.diagnosises.diagnosises)
  useEffect(() => {
    const issuedPrescriptions = prescriptions.filter(
      (prescription) => prescription.status === "paid"
    );
    const issuedNumber = issuedPrescriptions.length;
    setNumberIssued(issuedNumber);

    const confirmedPrescriptions = prescriptions.filter(
      (prescription) => prescription.status === "unpaid"
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
                  Finance
                </p>
                <span className="text-xs text-slate-400">{currentUser.username}</span>
              </div>
            </div>

            {/* <a href="#" className="flex flex-col items-center w-full px-2 py-3 mb-5 space-y-2 transition duration-150 ease-linear rounded-lg md:space-y-0 md:flex-row md:space-x-2 hover:bg-white/10 group">
                <div>
                    <img className="relative object-cover w-10 h-10 rounded-full" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt=""/>
                </div>
                <div>
                    <p className="font-medium leading-4 group-hover:text-indigo-400">Jim Smith</p>
                    <span className="text-xs text-slate-400">Pantazi LLC</span>
                </div>
            </a> */}
            <div className="flex items-center justify-end bg-blue-800 h-14 dark:bg-gray-800 header-right">
              {/* <div className="flex items-center w-full max-w-xl p-2 mr-4 bg-white border border-gray-200 rounded shadow-sm">
                  <button className="outline-none focus:outline-none">
                    <svg
                      className="w-5 h-5 text-gray-600 cursor-pointer"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search"
                    className="w-full pl-3 text-sm text-black bg-transparent outline-none focus:outline-none"
                  />
                </div> */}
              <ul className="flex items-center">

                {/* <li>
                    <button
                      aria-hidden="true"
                      // onCick={setup}
                      className="p-2 text-gray-900 transition-colors duration-200 bg-blue-200 rounded-full shadow-md group hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 focus:outline-none"
                    >
                      <svg
                        x-show="isDark"
                        width="24"
                        height="24"
                        className="text-gray-700 fill-current group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke=""
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </button>
                  </li> */}



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

                <li>
                </li>
                <li></li>
                {/* <li>
                    <Link
                      to="/lab/result"
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
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Lab Results
                      </span>
                    </Link>
                  </li> */}

                {/* <li>
                    <a
                      href="/"
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
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Notifications
                      </span>
                      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                        5
                      </span>
                    </a>
                  </li>
                  <li className="hidden px-5 md:block">
                    <div className="flex flex-row items-center h-8 mt-5">
                      <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                        Settings
                      </div>
                    </div>
                  </li> */}
                {/* <li>
                    <a
                      href="/"
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
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Settings
                      </span>
                    </a>
                  </li> */}
              </ul>
              <p className="hidden px-5 py-3 text-xs text-center mb-14 md:block">
                Copyright @2023
              </p>
            </div>
          </div>

          {/* <!-- ./Sidebar --> */}

          <div className="h-full mb-10 ml-14 mt-14 md:ml-64">
            {/* <!-- Statistics Cards --> */}
            <div className="flex flex-wrap justify-center my-5 ml-4 mr-4 -mx-2">
              {/* <div className="w-full p-2 lg:w-1/3">
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
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                      <div className="text-2xl whitespace-nowrap">
                        Appointments
                      </div>
                      <div className="">100</div>
                    </div>
                  </div>
                </div> */}


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
                      Confirmed Payments
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
                      UnConfirmed Payments
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
