import { useParams, Link } from "react-router-dom";
import doctors from "../../models/doctors.json"


export default function DoctorDetail() {
  let { doctorId } = useParams();
  return (
    <>
      {
        doctors.map((doctor, index) => doctor.id === doctorId && (
          <div className="h-full p-8 bg-gray-200">
            <div className="pb-8 bg-white rounded-lg shadow-xl">
              <div x-data="{ openSettings: false }" className="mt-4 rounded ">

                <div className="w-full h-[250px]">
                  <img
                  alt="bg"
                    src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                    className="w-full h-full rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="relative bottom-[100px] flex flex-col items-center">
                  <img
                  alt="profile"
                    src={doctor.photo}
                    className="object-cover object-center w-40 h-40 border-4 border-white rounded-full"
                  />
                  <div className="flex items-center mt-2 space-x-2">
                    <p className="text-2xl">Dr. {doctor.firstName} {doctor.lastName}</p>
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
                  <p className="text-sm text-gray-500">{doctor.wereda}, {doctor.kebele}</p>
                </div>

              </div>

              <div className="flex flex-col my-4 space-y-4 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
                <div className="flex flex-col w-full 2xl:w-1/3">
                  <div className="flex-1 p-8 bg-white rounded-lg shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900">Personal Info</h4>
                    <ul className="mt-2 text-gray-700">
                      <li className="flex py-2 border-y">
                        <span className="w-24 font-bold">Full name:</span>
                        <span className="text-gray-700">Dr. {doctor.firstName} {doctor.lastName}</span>
                      </li>

                      <li className="flex py-2 border-b">
                        <span className="w-24 font-bold">Mobile:</span>
                        <span className="text-gray-700">{doctor.contact}</span>
                      </li>
                      <li className="flex py-2 border-b">
                        <span className="w-24 font-bold">Email:</span>
                        <span className="text-gray-700">{doctor.email}</span>
                      </li>
                      <li className="flex py-2 border-b">
                        <span className="w-24 font-bold">Location:</span>
                        <span className="text-gray-700">{doctor.wereda}, {doctor.kebele}</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="flex-1 p-8 mt-4 bg-white rounded-lg shadow-xl">
                      <h4 className="text-xl font-bold text-gray-900">
                        doctor History{" "}
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
                    </div> */}
                </div>
                <div className="flex flex-col w-full 2xl:w-2/3">
                  <div className="flex-1 p-8 bg-white rounded-lg shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900">About</h4>
                    <p className="mt-2 text-gray-700">
                      {doctor.description}
                    </p>
                  </div>
                  <div className="flex-1 p-8 mt-4 bg-white rounded-lg shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900">Appointments</h4>
                    <div className="mx-4 mt-4">
                      <div className="flex flex-col items-end mb-10">


                        <div className="w-full rounded-lg shadow-xs">
                          <div className="w-full overflow-visible">
                            <table className="w-full sm:w-full">
                              <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                  <th className="px-4 py-3">Patient Full Name</th>
                                  <th className="px-4 py-3">Office NUmber</th>
                                  <th className="px-4 py-3">Contact</th>
                                  <th className="px-4 py-3">Date</th>
                                  <th className="px-4 py-4">Actions</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
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
                                        <p className="font-semibold">Dr. Abebe Alemu</p>
                                      </div>
                                    </div>
                                  </td>

                                  <td className="px-4 py-3 text-sm">T6995</td>

                                  <td className="px-4 py-3 text-sm">0921050510z</td>

                                  <td className="px-4 py-3 text-sm">05-06-2015</td>

                                  <td className="px-2 py-3">
                                    <div className="inline-flex items-center space-x-3">
                                      <a href="/" title="Edit" className="hover:text-black">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-5 h-5"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          />
                                        </svg>
                                      </a>
                                      <a className="w-5 h-5" x-data="{ tooltip: 'Delete' }" href="/">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-6 h-6"
                                          x-tooltip="tooltip"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* <div className="mt-4">
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
                      </div> */}
                  </div>
                  <div className="flex-1 p-8 mt-4 bg-white rounded-lg shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900">Prescriptions</h4>
                    <div className="mx-4 mt-4">
                      <div className="flex flex-col items-end mb-10">


                        <div className="w-full rounded-lg shadow-xs">
                          <div className="w-full overflow-visible">
                            <table className="w-full sm:w-full">
                              <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                  <th className="px-4 py-3">Patient Full Name</th>
                                  <th className="px-4 py-3">Patient Full Name</th>
                                  <th className="px-4 py-3">Contact</th>
                                  <th className="px-4 py-3">Date</th>
                                  <th className="px-4 py-4">Actions</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                                  <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                      <div>
                                        <p className="font-semibold">Dr. Abebe Alemu</p>
                                      </div>
                                    </div>
                                  </td>

                                  <td className="px-4 py-3 text-sm">T6995</td>

                                  <td className="px-4 py-3 text-sm">0921050510z</td>

                                  <td className="px-4 py-3 text-sm">05-06-2015</td>

                                  <td className="px-2 py-3">
                                    <div className="inline-flex items-center space-x-3">
                                      <a href="/" title="Edit" className="hover:text-black">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-5 h-5"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          />
                                        </svg>
                                      </a>
                                      <a className="w-5 h-5" x-data="{ tooltip: 'Delete' }" href="/">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          className="w-6 h-6"
                                          x-tooltip="tooltip"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </a>
                                      <Link
                                        to={`/adminDashbord/doctor/${doctor.id}`}
                                        className="text-blue-500 hover:text-blue-200"
                                      >
                                        Detail
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* <div className="mt-4">
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
                      </div> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
    </>);

}