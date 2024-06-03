import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import Modal from "../../update/profileUpdateModal";
import EditPatientInfo from "../../update/editPersonalInformation";
import { updatePatient } from "../../../redux/patientSlice";

export default function PatientProfile() {
  const appointments = useSelector((state) => state.appointments.appointments);
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );

  const doctors = useSelector((state) => state.doctors.doctors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [patientData, setPatientData] = useState(null);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  const handleSubmit = (updatedInfo) => {
    console.log("what is wrong", updatedInfo);
    dispatch(updatePatient(updatedInfo));
    Swal.fire("Updated!", `the profile updated successfully.`, "success");

    // Save the updated information to the database
    setIsModalOpen(false); // close the modal

    window.location.reload();
  };

  const [appointmentWithName, setAppointmentWithNames] = useState([]);
  const [prescriptionWithName, setPrescriptionWithNames] = useState([]);

  const getDoctorName = (doctorId) => {
    const doctor = doctors.find((d) => d.id == doctorId);
    return doctor ? `${doctor.firstName} ${doctor.lastName}` : "";
  };

  const getDoctorContact = (doctorId) => {
    const doctor = doctors.find((d) => d.id == doctorId);
    return doctor ? `${doctor.contact}` : "";
  };

  const patients = useSelector((state) => state.patients.patients);

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(id);
    try {
      const fetchData = async () => {
        if (id) {
          try {
            const selectedPatient = patients.find(
              (patient) => patient.id == id
            );
            console.log("___________________");
            console.log(selectedPatient);
            setData(selectedPatient);
            setIsLoading(false);
            const appointmentsWithNames = appointments.map((appointment) => ({
              ...appointment,
              doctorName: getDoctorName(appointment.doctorId),
              doctorContact: getDoctorContact(appointment.doctorId),
            }));
            setAppointmentWithNames(appointmentsWithNames);
            const prescriptionsWithNames = prescriptions.map(
              (prescription) => ({
                ...prescription,
                doctorName: getDoctorName(prescription.doctorId),
                doctorContact: getDoctorContact(prescription.doctorId),
              })
            );
            setPrescriptionWithNames(prescriptionsWithNames);
          } catch (error) {
            console.error(error);
          }
        }
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log("prescriptions", prescriptionWithName);

  const patientApt = appointmentWithName.filter((apt) => {
    if (id == apt.patientId)
      return {
        apt,
      };
  });

  const patientPrsc = prescriptionWithName.filter((prsc) => {
    if (id == prsc.patientId)
      return {
        prsc,
      };
  });

  console.log("filtered prescriptions", patientPrsc);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Loading...</h1>
          <div className="w-8 h-8 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-8 bg-gray-200 dark:bg-gray-700 dar:text-white">
      <div className="pb-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl">
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
          <div className="w-full h-[250px] relative bg-gray-800">
            <img
              alt=""
              src="/logos/logo1.png"
              className="w-full h-full rounded-tl-lg  rounded-tr-lg"
            />

            <Link
              to="/"
              className="absolute  text-white top-4 right-4 flex items-center hover:text-blue-100"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              Logout
            </Link>
          </div>

          <div className="flex flex-col items-center -mt-20">
            <div className=" h-40 bg-slate-200 w-40 border-4 border-white rounded-full z-10">
              <img
                alt=""
                src={
                  data.photo && `${process.env.REACT_APP_API_URL}/${data.photo}`
                }
                className="w-40 h-40 rounded-full"
              />
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <p className="text-2xl dark:text-white">
                {data.firstName} {data.lastName}
              </p>
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {data.wereda},{data.kebele}
            </p>
          </div>
          <div className="flex flex-col items-center justify-end flex-1 px-8 mt-2 lg:items-end">
            <div className="flex items-center mt-2 space-x-4">
              <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-100 transition duration-100 bg-blue-600 rounded hover:bg-blue-700">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg> */}

                <button onClick={handleEdit}>Update Profile</button>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-4 space-y-4 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
          <div className="flex flex-col w-full">
            <div className="flex-1 p-8 bg-white dark:bg-gray-600  rounded-lg shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Personal Info
              </h4>
              <ul className="mt-2 text-gray-700 dark:text-white whitespace-nowrap">
                <li className="flex py-2 border-y">
                  <span className="w-24 font-bold pr-2">Full name:</span>
                  <span className="text-gray-700 pl-4 dark:text-gray-300">
                    {data.firstName} {data.lastName}
                  </span>
                </li>
                {/* <li className="flex py-2 border-b">
                  <span className="w-24 font-bold pr-2">Birthday:</span>
                  <span className="text-gray-700">24 Jul, 1992</span>
                </li> */}
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold pr-2">Registered:</span>
                  <span className="text-gray-700 dark:text-gray-300 pl-4">
                    {data.createdAt}
                  </span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold pr-2">Contact</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {data.contact}
                  </span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold pr-2">Email:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {data.email}
                  </span>
                </li>
                <li className="flex py-2 border-b">
                  <span className="w-24 font-bold pr-2">Address:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {data.wereda}, {data.kebele}
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex-1 p-8 mt-4 bg-white dark:bg-gray-600 rounded-lg shadow-xl lg:col-span-1">
              <h4 className="text-xl pb-2 font-bold text-gray-900 dark:text-white">
                Treatment History
              </h4>

              {patientPrsc != "" ? (
                <div className="relative px-4">
                  <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="text-white da bg-blue-800 dark:bg-gray-700 dark:text-white">
                          <th className="px-4 py-2">Doctor Name</th>
                          <th className="px-4 py-2">Doctor Contact</th>
                          <th className="px-4 py-2">Description</th>
                          {/* <th className="px-4 py-2">Dosage</th> */}
                          <th className="px-4 py-2">Date</th>
                          <th className="px-4 py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientPrsc.map((apt, index) => {
                          return (
                            <tr
                              key={index}
                              className={`text-center text-white dark:text-gray-800 ${
                                index % 2 === 0 ? "bg-gray-100" : "bg-white"
                              }`}
                            >
                              <td className="px-4 py-2 border">
                                {apt.doctorName}
                              </td>
                              <td className="px-4 py-2 border">
                                {apt.doctorContact}
                              </td>
                              <td className="px-4 py-2 border">
                                {apt.description}
                              </td>
                              {/* <td className="px-4 py-2 border">{apt.dosage}</td> */}
                              <td className="px-4 py-2 border">
                                {apt.issueDate}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {apt.status === "confirmed" ? (
                                  <>
                                    <div className="text-center text-white bg-green-600 py-1 rounded">
                                      {apt.status}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="text-center text-white bg-red-600 py-1 rounded">
                                      {apt.status}
                                    </div>
                                  </>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-start justify-center mt-10 text-center">
                  {/* <p className="mb-4 text-2xl font-bold text-gray-600 dark:text-white ">
                    Please wait or contact the doctor.
                  </p> */}
                  <p className="text-gray-600 dark:text-white">
                    You have no prescriptions yet.
                  </p>
                </div>
              )}
            </div>

            <div className="flex-1 p-8 mt-4 overflow-x-auto bg-white dark:bg-gray-600 rounded-lg shadow-xl lg:col-span-2">
              <h4 className=" py-2 text-xl font-bold text-gray-900 dark:text-white font">
                Appointments
              </h4>
              {patientApt != "" ? (
                <div className="relative">
                  <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="text-white bg-blue-800 dark:bg-gray-700 ">
                          <th className="px-4 py-2">Doctor Name</th>
                          <th className="px-4 py-2">Doctor Contact</th>
                          <th className="px-4 py-2">Appointment Location</th>
                          <th className="px-4 py-2">Date</th>
                          <th className="px-4 py-2">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientApt.map((apt, index) => {
                          const currentDate = new Date();
                          const [mm, dd, yy] = apt.date.split("-");
                          const [hh, min, period] = apt.time.split(/:|\s/);
                          const aptDate = new Date(yy, mm - 1, dd, hh, min, 0);
                          const status =
                            aptDate > currentDate ? "Active" : "Closed";

                          return (
                            <tr
                              key={index}
                              className={`text-center ${
                                index % 2 === 0 ? "bg-gray-100" : "bg-white"
                              }`}
                            >
                              <td className="px-4 py-2 border">
                                {apt.doctorName}
                              </td>
                              <td className="px-4 py-2 border">
                                {apt.doctorContact}
                              </td>
                              <td className="px-4 py-2 border">
                                {apt.location}
                              </td>
                              <td className="px-4 py-2 border">{apt.date}</td>
                              <td className="px-4 py-2 border">{apt.time}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-start justify-center mt-10 text-center">
                  {/* <p className="mb-4 text-2xl font-bold text-gray-600 dark:text-white">
  Please wait or contact Admin.
</p> */}
                  <p className="text-gray-600 dark:text-white">
                    You have no appointments yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <EditPatientInfo
            onClose={handleCloseModal}
            patientInfo={data}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
}
