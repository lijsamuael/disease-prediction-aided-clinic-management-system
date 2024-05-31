import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrescriptionModal from "./prescriptionModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DiagnosisModal from "./diagnosis";

export default function DoctorContent(props) {
  const navigate = useNavigate();

  const patients = useSelector((state) => state.patients.patients);
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );
  const appointments = useSelector((state) => state.appointments.appointments);
  const [patientId, setPatientId] = useState("");
  const prsc = useSelector((state) => state.prescriptions.prescriptions);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [showModal, setShowModal] = useState(false);
  const [doctorPrescriptions, setDoctorPrescriptions] = useState([]);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [filteredAppointmentsWithName, setFilteredAppointmentsWithName] =
    useState([]);

  const getPatientName = (patientId) => {
    const patient = patients.find((p) => p.id == patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : "";
  };

  const getGender = (patientId) => {
    console.log("patients", patients);
    console.log("patient id", patientId);
    const patient = patients.find((p) => p.id == patientId);
    // console.log("the gender of this patient is",patient.gender)
    // console.log("tha name of this patient is",patient.firstName)
    return patient ? patient.gender : "";
  };

  const getContact = (patientId) => {
    const patient = patients.find((p) => p.id == patientId);
    return patient ? patient.contact : "";
  };

  useEffect(() => {
    const filtered = appointments.filter(
      (appointment) => appointment.doctorId == currentUser.id
    );
    console.log("good currrent user id is ", currentUser.id);
    console.log("filtered appointment is ", filtered);
    const appointmentPatientNames = filtered.map((appointment) => ({
      ...appointment,
      patientName: getPatientName(appointment.patientId) || "Unknown",
      gender: getGender(appointment.patientId) || "Unknown",
      contact: getContact(appointment.patientId) || "Unknown",
    }));
    console.log("apointment patient info", appointmentPatientNames);
    setFilteredAppointmentsWithName(appointmentPatientNames);
    const filteredPrescriptions = prescriptions.filter(
      (prescription) => prescription.doctorId == currentUser.id
    );
    const prescriptionPatientNames = filteredPrescriptions.map(
      (prescription) => ({
        ...prescription,
        patientName: getPatientName(prescription.patientId),
        gender: getGender(prescription.patientId),
        contact: getContact(prescription.patientId),
      })
    );
    setDoctorPrescriptions(prescriptionPatientNames);
  }, []);

  useEffect(() => {
    console.log(patientId);
  }, [patientId]);

  return (
    <>
      <div className="mx-4 mt-4">
        <div className="flex flex-col items-end mb-10">
          <form className="flex items-center w-full">
            <label for="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5  text-gray-500 dark:text-gray-400"
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
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium bg-blue-800 text-white rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>

          <div className="w-full rounded-lg shadow-xs pt-4">
            <h1 className="px-2 py-4 font-mono text-xl font-bold tracking-widest  text-gray-700 dark:text-white ">
              Your New Appointments
            </h1>
            <div className="w-full overflow-visible">
              <table className="w-full sm:w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th className="px-4 py-3">Patient Full Name</th>
                    <th className="px-4 py-3">Gender</th>
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-4">Actions</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  {filteredAppointmentsWithName &&
                    filteredAppointmentsWithName.map((item, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400"
                      >
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
                              <p className="font-semibold">
                                {item.patientName}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3 text-sm">{item.gender}</td>
                        <td className="px-4 py-3 text-sm">{item.contact}</td>
                        <td className="px-4 py-3 text-sm">{item.date}</td>
                        <td className="px-4 py-3 text-sm">{item.time}</td>
                        <td className="px-4 py-3 text-sm">{item.location}</td>
                        <td className="px-2 py-3">
                          <div className="inline-flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <button
                                onClick={handleShow}
                                className="p-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-700"
                              >
                                Send Test Cases For Lab
                              </button>
                              <PrescriptionModal
                                showModal={showModal}
                                handleClose={handleClose}
                                // item here is appointment
                                item={item}
                              />
                            </div>
                            <td className="px-2 py-3">
                              <div className="inline-flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  <div className="inline-flex items-center space-x-3">
                                    {/* <button
                              onClick={handleDiagnosis(item.patientId)}
                                className="p-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
                              >
                                Prescribe
                              </button> */}
                                    {/* <Link
                                      to={`/doctor/dgs/${item.patientId}`}
                                      className="p-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
                                    >
                                      Prescribe
                                    </Link> */}
                                  </div>
                                </div>
                              </div>
                            </td>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
