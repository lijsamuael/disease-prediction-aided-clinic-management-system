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
    <div class="bg-gray-100 dark:bg-gray-800 dark:text-white h-screen">
      <div class="py-8">
        <div class="grid grid-cols-12 gap-6 px-4">
          <div class="col-span-12   lg:col-span-5 xl:col-span-4">
            <div class="bg-white h-screen dark:bg-gray-700 shadow rounded-lg p-6">
              <div class="flex flex-col items-center">
                <img
                  alt="profile"
                  src={
                    data.photo &&
                    `${process.env.REACT_APP_API_URL}/${data.photo}`
                  }
                  class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 class="text-xl font-bold whitespace-nowrap">
                  {data.firstName} {data.lastName}
                </h1>
                <div
                  x-data="{ openSettings: false }"
                  className="mt-4 rounded flex justify-between items-center"
                >
                  <div className="flex flex-col items-center justify-end flex-1 px-8 mt-2 lg:items-end">
                    <div className="flex items-center mt-2 space-x-4">
                      <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-100 transition duration-100 bg-blue-600 rounded hover:bg-blue-700">
                        <button onClick={handleEdit}>Update Profile</button>
                      </button>
                    </div>
                  </div>
                  <Link
                    to="/"
                    className="   flex items-center bg-red-400 hover:bg-red-500 p-2 rounded-md  mt-4"
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
                <div className="flex-1 p-8  rounded-lg ">
                  <ul className="mt-2 text-gray-700 dark:text-white whitespace-nowrap">
                    <li className="flex py-2 border-y">
                      <span className="w-24 font-bold pr-2">Full name:</span>
                      <span className="text-gray-700 pl-4 dark:text-gray-300">
                        {data.firstName} {data.lastName}
                      </span>
                    </li>
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
              </div>
            </div>
          </div>
          <div class="col-span-12  lg:col-span-7 xl:col-span-8">
            <div class="bg-white h-screen dark:bg-gray-700 shadow rounded-lg p-6">
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
                          <tr className="text-white da bg-blue-800 dark:bg-gray-700 dark:text-b">
                            <th className="px-4 py-2">Doctor Name</th>
                            <th className="px-4 py-2">Doctor Contact</th>
                            <th className="px-4 py-2">Description</th>
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
                      <table className="min-w-full bg-white ">
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
                            const aptDate = new Date(
                              yy,
                              mm - 1,
                              dd,
                              hh,
                              min,
                              0
                            );
                            const status =
                              aptDate > currentDate ? "Active" : "Closed";

                            return (
                              <tr
                                key={index}
                                className={`text-center ${
                                  index % 2 === 0
                                    ? "bg-gray-100 dark:bg-gray-600"
                                    : "bg-white dark:bg-gray-700"
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
                    <p className="text-gray-600 dark:text-white">
                      You have no appointments yet.
                    </p>
                  </div>
                )}
              </div>
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
