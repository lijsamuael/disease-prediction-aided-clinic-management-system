import React from "react";
import { Link } from "react-router-dom";
export default function HomeLanding() {
  return (
    <section className="py-16 pt-32 max-w-screen-xl mx-auto">
      <div className="grid  px-4 py-8 mx-auto overflow-x-hidden lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className="max-w-2xl mb-4 text-4xl font-medium leading-none tracking-wider md:text-5xl xl:text-6xl dark:text-white"
            style={{ fontFamily: "Righteous" }}
          >
            Take care of your body and it will take care of you.
          </h1>
          <p
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            // style={{ fontFamily: "Righteous" }}
          >
            We will provide you a standard check in your health. And also Tele
            Medicine in your home.
          </p>

          <Link
            to="/emergency"
            className="inline-flex items-center shadow-lg justify-center px-5 py-3 text-base font-medium text-center text-gray-900 duration-700 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Report for Emergency
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
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/5.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
