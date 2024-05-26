import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";
import SidebarComponent from "../../components/doctor/sidebarComponent";
import { useSelector, useDispatch } from "react-redux";
export default function DoctorDashbord(props) {
  const dispatch = useDispatch();
  const numberOfPrescriptions = useSelector(
    (state) => state.prescriptions.quantity
  );
  const appointments = useSelector((state) => state.appointments.appointments);
  const [numberIssued, setNumberIssued] = useState(0);
  const [numberConfirmed, setNumberConfirmed] = useState(0);
  const [numberOfAppointment, setNumberOfAppointment] = useState(0);
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );
  const currentDoctor = useSelector((state) => state.currentUser.currentUser);

  useEffect(() => {
    // console.log("url from meta", import.meta.env.REACT_API_URL);
    console.log(
      "url from process",
      `${process.env.REACT_APP_API_URL}/${currentDoctor.photo}`
    );
    const issuedPrescriptions = prescriptions.filter(
      (prescription) => prescription.status === "issued"
    );
    const issuedPrescriptionsForDoctor = issuedPrescriptions.filter(
      (prescription) => prescription.doctorId === currentDoctor.id
    );
    const issuedNumber = issuedPrescriptionsForDoctor.length;
    setNumberIssued(issuedNumber);

    const confirmedPrescriptions = prescriptions.filter(
      (prescription) => prescription.status === "confirmed"
    );

    const confirmedPrescriptionsForDoctor = confirmedPrescriptions.filter(
      (prescription) => prescription.doctorId === currentDoctor.id
    );

    const confirmedNumber = confirmedPrescriptionsForDoctor.length;
    setNumberConfirmed(confirmedNumber);

    const filteredAppointments = appointments.filter(
      (appointment) => appointment.doctorId == currentDoctor.id
    );

    const numberOfAppointments = filteredAppointments.length;
    setNumberOfAppointment(numberOfAppointments);
    console.log(
      "number of appointments for the doctor is",
      numberOfAppointments
    );
  }, [prescriptions, appointments, currentDoctor.id]);

  return (
    <>
      <div x-data="setup()" className="bg-black">
        <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-black bg-white dark:bg-gray-700 dark:text-white">
          {/* <!-- Header --> */}
          <div className="fixed z-10 flex items-center justify-between w-full text-white h-14">
            <div className="flex items-center justify-start pl-3 bg-blue-800 border-none md:justify-center w-14 md:w-64 h-14 dark:bg-gray-800">
              <img
                className="relative object-cover w-10 h-10 mr-2 rounded-full"
                src={`${process.env.REACT_APP_API_URL}/${currentDoctor.photo}`}
                alt="img"
              />

              <div>
                <p className="font-medium leading-4 group-hover:text-indigo-400">
                  Doctor {currentDoctor && currentDoctor.firstName}
                </p>
                <span className="text-xs text-slate-400">
                  {currentDoctor.specialization}
                </span>
              </div>
            </div>
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
              <ul className="flex items-center gap-x-8">
                {/* <li>
                  <Notifications />
                </li> */}
                {/* <li>
                  <button
                    aria-hidden="true"
                    onCick={setup}
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
                      strokeprescri=""
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
          <SidebarComponent />
          <div className="h-full mb-10 ml-14 mt-14 md:ml-64">
            <div className="flex flex-wrap justify-center my-5 ml-2 mr-1 -mx-2">
              <div className="w-full p-2 lg:w-1/3">
                <div className="flex flex-row items-center w-full p-3 bg-blue-500 rounded-md dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500">
                  <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <img
                      src="icons/appointment.jpg"
                      alt=""
                      className="w-8 h-8 text-blue-800 transition-transform duration-500 ease-in-out transform bg-blue-500 rounded-full stroke-current h-30 dark:text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                    <div className="text-2xl whitespace-nowrap">
                      Appointments
                    </div>
                    <div className="">{numberOfAppointment}</div>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/3 ">
                <div className="flex flex-row items-center w-full p-3 bg-blue-500 rounded-md dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500">
                  <div className="flex items-center flex-none w-8 h-8 p-2 text-indigo-500 bg-white rounded-md dark:text-white md:w-12 md:h-12 ">
                    <img
                      src="/icons/prescription.png"
                      alt=""
                      className="w-8 h-8 text-blue-800 transition-transform duration-500 ease-in-out transform bg-blue-500 rounded-full stroke-current h-30 dark:text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                    <div className="text-2xl whitespace-nowrap">
                      Issued Lab Orders
                    </div>
                    <div className="">{numberIssued}</div>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex flex-row items-center w-full p-3 bg-blue-500 rounded-md dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500">
                  <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                    <img
                      src="/icons/lab.png"
                      alt=""
                      className="w-8 h-8 text-blue-800 transition-transform duration-500 ease-in-out transform bg-blue-500 rounded-full stroke-current h-30 dark:text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                    <div className="text-2xl whitespace-nowrap overflow-ellipsis">
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
