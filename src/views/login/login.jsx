import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import data from "../../models/data.json";

export default function LogIn() {
  const [info, setInfo] = useState();
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="relative flex min-h-screen ">
      <div className="flex flex-col items-center flex-auto min-w-0 bg-white sm:flex-row md:items-start sm:justify-center md:justify-start">
        <div
          className="relative items-center justify-center flex-auto hidden h-full p-10 overflow-hidden text-white bg-purple-900 bg-no-repeat bg-cover sm:w-1/2 xl:w-3/5 md:flex"
          style={{
            backgroundImage: "url(/images/bg1.jpg)",
          }}
        >
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-600 to-blue-500 opacity-40"></div>
          <div
            className="z-10 w-full max-w-md"
            style={{ fontFamily: "Righteous" }}
          >
            <div className="mb-6 font-bold leading-tight tracking-wide sm:text-4xl xl:text-5xl">
              Welcome to our Clinic Management System
            </div>
            <div
              className="font-mono font-normal text-white sm:text-sm xl:text-xl"
              //   style={{ fontFamily: "Josefin Sans" }}
            >
              A full ranged clinic management system for Patients, Doctors, and
              Managers.
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export function Form({ user }) {
  return (
    <form className="py-8 mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      {data.user.map((item, index) => (
        <div className="relative">
          <div className="absolute mt-4 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
            card number
          </label>
          <input
            className="w-full px-4 py-2 text-base border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
            type="text"
            placeholder="Ente your medical card number"
            value={""}
            onChange={(e) => e.target.value}
          />
        </div>
      ))}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <label for="remember_me" className="block ml-2 text-sm text-gray-900">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="text-indigo-400 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600"
        >
          Sign in
        </button>
      </div>
      {/* <p className="flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-md">
                <span>Click here to regsiter.</span>
                <a
                  href="#"
                  className="text-indigo-400 no-underline transition duration-300 ease-in cursor-pointer hover:text-blue-500 hover:underline"
                >
                  Ask for card number
                </a>
              </p> */}
    </form>
  );
}
