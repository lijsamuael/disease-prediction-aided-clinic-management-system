import { Link } from "react-router-dom";
import LoginIcon from "./icons/login";

export default function NavBar() {
  return (
    <nav className="fixed z-30 w-screen px-4 py-4  shadow-md  lg:px-6   ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
        <a href="/" className="flex items-center">
          <img
            src="/logos/logo1.png"
            className="mr-3 rounded-full-6 h-12 "
            alt="Logo"
          />
          {/* <span
              className="self-center text-xl font-bold tracking-widest text-gray-500 whitespace-nowrap dark:text-white"
              style={{ fontFamily: "Righteous" }}
            >
              MediConnect
            </span> */}
        </a>
        <div className="flex items-center lg:order-2">
          <Link
            to="/signIn"
            className="flex  shadow-lg  items-center justify-between gap-x-2 text-xl text-black bg-white  hover:bg-gray-200 focus:ring-4 focus:ring-blue-300  rounded-3xl  px-10 py-2.5 mr-2  focus:outline-none dark:focus:ring-blue-800"
          >
            <p>Sign In Now</p>
            {/* <LoginIcon /> */}
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
  );
}
