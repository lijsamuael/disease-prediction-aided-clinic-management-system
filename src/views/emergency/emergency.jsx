import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../../components/icons/login";
import Landing from "../../components/landing";
import { diseaseLabels } from "../../constants/disease";
import { symptoms } from "../../constants/symptoms";
import Chatbot from "../../components/chatbot";
import AddEmergency from "../add/addEmergency";

export default function Emergency() {
  return (
    <div
      className="overflow-x-hidden bg-fixed bg-cover font-mono"
      // style={{ fontFamily: "Righteous" }}
      style={{ backgroundImage: "url(/images/bg3.png)" }}
    >
      <nav className="fixed z-30 w-screen px-4 py-4 bg-white border-gray-200 shadow-lg lg:px-6 dark:bg-gray-800 bg-white/95 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
          <a href="/" className="flex items-center">
            <img
              src="/icons/logo.png"
              className="mr-3 rounded-full-6 h-9 bg-gray-700"
              alt="Logo"
            />
            <span
              className="self-center text-xl font-bold tracking-widest text-gray-500 whitespace-nowrap dark:text-white"
              style={{ fontFamily: "Righteous" }}
            >
              MediConnect
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Link
              to="/signIn"
              className="flex w-32  items-center justify-between gap-x-2 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <p style={{ fontFamily: "Righteous" }}>Login</p>
              <LoginIcon />
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto overflow-x-hidden lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-wider md:text-5xl xl:text-6xl dark:text-white"
              style={{ fontFamily: "Righteous" }}
            >
              Emergency Report Portal.
            </h1>
            <p
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
              style={{ fontFamily: "Righteous" }}
            >
              Please try to fill all the necessary informations so that you will
              be directly contacted by th hospital.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white duration-700 bg-blue-700 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Call For Ambulance
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 duration-700 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              +251 145 456 3562
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/5.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div
          className=" px-4 py-8 mx-auto "
          style={{ fontFamily: "Righteous" }}
        >
          <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-widest text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
            Enter Patient Information
          </h2>
          <AddEmergency />
        </div>
      </section>

      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}
