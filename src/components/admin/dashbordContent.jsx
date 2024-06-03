import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import DiseaseComponent from "./diseaseComponent";
import { Link } from "react-router-dom";
import EventComponent from "./eventComponent";
export default function DashbordContent(props) {
  const [emergencies, setEmergencies] = useState([]);

  const patients = useSelector((state) =>
    state.patients.patients.filter((patient) => patient.isNew == "yes")
  );

  const fetchEmergencies = async () => {
    try {
      const response = await axios.get("http://localhost:5000/emergencies");
      console.log(response.data);
      setEmergencies(response.data);
    } catch (error) {
      console.log("error in fetching emergencies");
    }
  };

  useEffect(() => {
    fetchEmergencies();
  }, []);

  return (
    <>
      <main>
        <div className="px-4 pt-6">
          <div className="grid grid-cols-1 my-4  xl:gap-4">
            <div className="h-full py-4 mb-4  rounded-lg shadow sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  New Registered Patients{" "}
                </h3>
              </div>
              <div className="mt-4 whitespace-nowrap">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-white dark:bg-gray-600">
                          <th className="px-4 py-3">Patient Full Name</th>
                          <th className="px-4 py-3">Gender</th>
                          <th className="px-4 py-3">Age</th>
                          <th className="px-4 py-3">Contact</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Time</th>
                          <th className="px-4 py-3">Actions</th>
                          <th className="px-4 py-4">payment</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {patients.map((patient, index) => (
                          <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                {/* <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                             <img
                               className="object-cover w-full h-full rounded-full"
                               src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                               alt=""
                               loading="lazy"
                             />
                             <div
                               className="absolute inset-0 rounded-full shadow-inner"
                               aria-hidden="true"
                             ></div>
                           </div> */}
                                <div>
                                  <p className="font-semibold ">
                                    {patient.firstName} {patient.lastName}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {patient.gender}
                            </td>

                            <td className="px-4 py-3 text-sm">{patient.age}</td>

                            <td className="px-4 py-3 text-sm">
                              {patient.contact}
                            </td>

                            <td className="px-4 py-3 text-sm">
                              {patient.date}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {patient.date}
                            </td>
                            <td>
                              <div className="flex-shrink-0">
                                <Link
                                  to={`/adminDashbord/addAppointment/${patient.id}`}
                                  className="p-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-700 whitespace-nowrap"
                                >
                                  Send Appointment
                                </Link>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {patient.fee ? (
                                <>
                                  <div className="text-center p-2 text-white bg-green-600 rounded ">
                                    Successful
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="p-2 text-center text-white bg-red-600 rounded ">
                                    Failed
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                      {" "}
                      Showing 21-30 of 100{" "}
                    </span>
                    <span className="col-span-2"></span>
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
                  </div> */}
                </div>
              </div>

              {/* new patient component */}
            </div>

            <div className="h-full py-4 mb-4  rounded-lg shadow sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  New Emergencies
                </h3>
              </div>
              <div className="mt-4 whitespace-nowrap">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-white dark:bg-gray-600">
                          <th className="px-4 py-3">Patient Full Name</th>
                          <th className="px-4 py-3">Gender</th>
                          <th className="px-4 py-3">Age</th>
                          <th className="px-4 py-3">Contact</th>
                          <th className="px-4 py-3">Location</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        {emergencies &&
                          emergencies.map((emergency, index) => (
                            <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                  {/* <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                             <img
                               className="object-cover w-full h-full rounded-full"
                               src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                               alt=""
                               loading="lazy"
                             />
                             <div
                               className="absolute inset-0 rounded-full shadow-inner"
                               aria-hidden="true"
                             ></div>
                           </div> */}
                                  <div>
                                    <p className="font-semibold ">
                                      {emergency.patientFirstName}{" "}
                                      {emergency.patientLastName}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {emergency.gender}
                              </td>

                              <td className="px-4 py-3 text-sm">
                                {emergency.age}
                              </td>

                              <td className="px-4 py-3 text-sm">
                                {emergency.phone}
                              </td>

                              <td className="px-4 py-3 text-sm">
                                {emergency.location}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {new Date(emergency.createdAt)
                                  .toISOString()
                                  .slice(0, 10)}
                              </td>
                              <td>
                                <div className="flex-shrink-0">
                                  {emergency.description}
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                      {" "}
                      Showing 21-30 of 100{" "}
                    </span>
                    <span className="col-span-2"></span>
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
                  </div> */}
                </div>
              </div>

              {/* new patient component */}
            </div>
          </div>
          {/* <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 2xl:col-span-2">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex-shrink-0 mt-3">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    $45,385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Total Service charge
                  </h3>
                </div>
                <div className="flex-shrink-0 mt-3">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    $5,385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    This week Service charge
                  </h3>
                </div>
              </div>
              <div id="main-chart"></div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Recent Health Events
                  </h3>
                  <span className="text-base font-normal text-gray-500">
                    This is a list of recent events
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/"
                    className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                  >
                    View all
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                            >
                              Event
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                            >
                              Date & Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    23
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    New patients this week
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                  14.6%
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    20
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    New Appointments of this week
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                  32.9%
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                    385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Prescription of this week
                  </h3>
                </div>
                <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
                  5%
                </div>
              </div>
            </div>
          </div>
           */}
        </div>
      </main>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </>
  );
}
