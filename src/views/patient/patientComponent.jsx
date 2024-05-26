import React from "react";
import PatientRecord from "../../components/admin/patientRecord";
import { Link } from "react-router-dom";
export default function PatientHome() {
  return (
    <div className="h-full p-8 bg-gray-200">
      <div className="pb-8 bg-white rounded-lg shadow-xl">
        <div x-data="{ openSettings: false }" className="mt-4 rounded ">
          <div
            x-show="openSettings"
            onClick="openSettings = false"
            className="absolute right-0 w-40 py-2 mt-1 bg-white border border-gray-200 shadow-2xl"
            style={{ display: "none" }}
          >
            <div className="py-2 border-b">
              <p className="px-6 mb-1 text-xs text-gray-400 uppercase">
                Settings
              </p>
              <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Share Profile</span>
              </button>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Block User</span>
              </button>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">More Info</span>
              </button>
            </div>
            <div className="py-2">
              <p className="px-6 mb-1 text-xs text-gray-400 uppercase">
                Feedback
              </p>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Report</span>
              </button>
            </div>
          </div>
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center mt-2 space-x-2">
              <p className="text-2xl">Blen Abatua</p>
              <span className="p-1 bg-blue-500 rounded-full" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="text-sm text-gray-500">Bahir Dar, Poly</p>
          </div>
          <div className="flex flex-col items-center justify-end flex-1 px-8 mt-2 lg:items-end">
            <div className="flex items-center mt-2 space-x-4">
              <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-100 transition duration-100 bg-blue-600 rounded hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-4 space-y-4 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
          <div className="flex flex-col w-full 2xl:w-1/3">
            <div className="flex-1 p-8 bg-white rounded-lg shadow-xl">
              <h4 className="text-xl font-bold text-gray-900">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex py-2 border-y">
                  <span className="w-24 font-bold">Full name:</span>
                  <span className="text-gray-700">Blain </span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold">Birthday:</span>
                  <span className="text-gray-700">24 Jul, 1992</span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold">Registered:</span>
                  <span className="text-gray-700">
                    10 Jan 2022 (25 days ago)
                  </span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold">Mobile:</span>
                  <span className="text-gray-700">+25 192 164 4607</span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold">Email:</span>
                  <span className="text-gray-700">blen@example.com</span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold">Location:</span>
                  <span className="text-gray-700">Bahir Dar, Poly</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-8 mt-4 bg-white rounded-lg shadow-xl">
              <h4 className="text-xl font-bold text-gray-900">
                Patient History{" "}
              </h4>
              <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="z-10 w-1/12">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="z-10 w-1/12">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="z-10 w-1/12">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="z-10 w-1/12">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="z-10 w-1/12">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="z-10 w-1/12">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 p-8 bg-white rounded-lg shadow-xl">
              <h4 className="text-xl font-bold text-gray-900">About</h4>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptates obcaecati numquam error et ut fugiat
                asperiores. Sunt nulla ad incidunt laboriosam, laudantium est
                unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ut, magni odio magnam commodi sunt
                ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta
                autem odio laudantium eligendi commodi distinctio!
              </p>
            </div>
            <div className="flex-1 p-8 mt-4 bg-white rounded-lg shadow-xl">
              <h4 className="text-xl font-bold text-gray-900">Appointments</h4>
              <div className="mx-4 mt-4">
                <div className="flex flex-col items-end mb-10">


                  <form className="flex items-center w-full">
                    <label for="voice-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="voice-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search patients by thire name and card number "
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-5 h-5 mr-2 -ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                      Search
                    </button>
                  </form>

                  <div className="w-full rounded-lg shadow-xs">
                    <div className="w-full overflow-visible">
                      <table className="w-full sm:w-full">
                        <thead>
                          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3">Doctor Full Name</th>
                            <th className="px-4 py-3">Office NUmber</th>
                            <th className="px-4 py-3">Contact</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-4">Actions</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                          <PatientRecord />
                          <PatientRecord />
                          <PatientRecord />
                          <PatientRecord />
                          <PatientRecord />
                        </tbody>
                      </table>
                    </div>
                    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                      <span className="flex items-center col-span-3">
                        {" "}
                        Showing 21-30 of 100{" "}
                      </span>
                      <span className="col-span-2"></span>
                      {/* <!-- Pagination --> */}
                      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                          <ul className="inline-flex items-center">
                            <li>
                              <button
                                className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                aria-label="Previous"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="w-4 h-4 fill-current"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </li>
                            <li>
                              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                1
                              </button>
                            </li>
                            <li>
                              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                2
                              </button>
                            </li>
                            <li>
                              <button className="px-3 py-1 text-white transition-colors duration-150 bg-blue-600 border border-r-0 border-blue-600 rounded-md dark:text-gray-800 dark:bg-gray-100 dark:border-gray-100 focus:outline-none focus:shadow-outline-purple">
                                3
                              </button>
                            </li>
                            <li>
                              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                4
                              </button>
                            </li>
                            <li>
                              <span className="px-3 py-1">...</span>
                            </li>
                            <li>
                              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                8
                              </button>
                            </li>
                            <li>
                              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                9
                              </button>
                            </li>
                            <li>
                              <button
                                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                aria-label="Next"
                              >
                                <svg
                                  className="w-4 h-4 fill-current"
                                  aria-hidden="true"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <canvas
                  id="verticalBarChart"
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: "414px",
                    width: "828px",
                  }}
                  width="1656"
                  height="828"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="p-8 bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-gray-900">
              Connections (532)
            </h4>
            <a href="/" title="View All">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Diane Aguilar
              </p>
              <p className="text-xs text-center text-gray-500">
                UI/UX Design at Upwork
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Frances Mather
              </p>
              <p className="text-xs text-center text-gray-500">
                Software Engineer at Facebook
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Carlos Friedrich
              </p>
              <p className="text-xs text-center text-gray-500">
                Front-End Developer at Tailwind CSS
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Donna Serrano
              </p>
              <p className="text-xs text-center text-gray-500">
                System Engineer at Tesla
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Randall Tabron
              </p>
              <p className="text-xs text-center text-gray-500">
                Software Developer at Upwork
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                John McCleary
              </p>
              <p className="text-xs text-center text-gray-500">
                Software Engineer at Laravel
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">Amanda Noble</p>
              <p className="text-xs text-center text-gray-500">
                Graphic Designer at Tailwind CSS
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Christine Drew
              </p>
              <p className="text-xs text-center text-gray-500">
                Senior Android Developer at Google
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">Lucas Bell</p>
              <p className="text-xs text-center text-gray-500">
                Creative Writer at Upwork
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Debra Herring
              </p>
              <p className="text-xs text-center text-gray-500">
                Co-Founder at Alpine.js
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Benjamin Farrior
              </p>
              <p className="text-xs text-center text-gray-500">
                Software Engineer Lead at Microsoft
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">Maria Heal</p>
              <p className="text-xs text-center text-gray-500">
                Linux System Administrator at Twitter
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">Edward Ice</p>
              <p className="text-xs text-center text-gray-500">
                Customer Support at Instagram
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Jeffery Silver
              </p>
              <p className="text-xs text-center text-gray-500">
                Software Engineer at Twitter
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Jennifer Schultz
              </p>
              <p className="text-xs text-center text-gray-500">
                Project Manager at Google
              </p>
            </a>
            <a
              href="/"
              className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
              title="View Profile"
            >
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
                className="w-16 rounded-full"
              />
              <p className="mt-1 text-sm font-bold text-center">
                Joseph Marlatt
              </p>
              <p className="text-xs text-center text-gray-500">
                Team Lead at Facebook
              </p>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
