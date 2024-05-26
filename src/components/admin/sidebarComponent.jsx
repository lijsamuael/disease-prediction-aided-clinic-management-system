import React from "react";
import { Link } from "react-router-dom";
export default function SidebarComponent(props) {
  return (
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
            <Link
              to="/adminDashbord/doctor"
              className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
            >
              <span className="inline-flex items-center justify-center ml-4">
                <img className="w-5 h-5" src="/icons/Doctors.svg" alt="" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Doctors
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/adminDashbord/patient"
              className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
            >
              <span className="inline-flex items-center justify-center ml-4">
              <img className="w-5 h-5" src="/icons/patients.svg" alt="" />

              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Patients
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/adminDashbord/appointment"
              className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
            >
              <span className="inline-flex items-center justify-center ml-4">
              <img className="w-5 h-5" src="/icons/appointment.svg" alt="" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Appointments
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/adminDashbord/prescription"
              className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
            >
              <span className="inline-flex items-center justify-center ml-4">
              <img className="w-5 h-5" src="/icons/prescription.svg" alt="" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Lab Orders
              </span>
            </Link>
          </li>
        </ul>
        <p className="hidden px-5 py-3 text-xs text-center mb-14 md:block">
          Copyright @2023
        </p>
      </div>
    </div>
  );
}
