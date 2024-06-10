import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DoctorDetail() {
  const doctors = useSelector((state) => state.doctors.doctors);
  const appointments = useSelector((state) => state.appointments.appointments);
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );
  const patients = useSelector((state) => state.patients.patients);
  let { doctorId } = useParams();

  const getPatientName = (patientId) => {
    const patient = patients.find((d) => d.id == patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : "";
  };

  console.log("appointments", appointments);
  console.log("prescriptions", prescriptions);
  console.log("doctor id", doctorId);

  return (
    <>
      {doctors.map(
        (doctor, index) =>
          doctor.id == doctorId && (
            <div className="h-full p-8 bg-gray-200 dark:bg-gray-800">
              <div className="pb-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl">
                <div x-data="{ openSettings: false }" className="mt-4 rounded ">
                  <div className="w-full h-[250px]">
                    <img
                      alt="bg"
                      src="/images/profile-background.jpg"
                      className="w-full h-full rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="relative bottom-[100px] flex flex-col items-center">
                    <img
                      alt="profile"
                      src={
                        doctor.photo &&
                        `${process.env.REACT_APP_API_URL}/${doctor.photo}`
                      }
                      className="object-cover object-center w-40 h-40 border-4 border-white rounded-full"
                    />
                    <div className="flex items-center mt-2 space-x-2">
                      <p className="text-2xl">
                        Dr. {doctor.firstName} {doctor.lastName}
                      </p>
                      <span
                        className="p-1 bg-blue-500 rounded-full"
                        title="Verified"
                      >
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
                    <p className="text-sm text-gray-500 dark:text-slate-200">
                      {doctor.wereda}, {doctor.kebele}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-4 space-y-4 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
                  <div className="flex flex-col w-full 2xl:w-1/3">
                    <div className="flex-1 p-8 bg-white dark:bg-gray-700 rounded-lg shadow-xl">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Personal Info
                      </h4>
                      <ul className="mt-2 ">
                        <li className="flex py-2 border-y">
                          <span className="w-24 font-bold">Full name:</span>
                          <span className="">
                            Dr. {doctor.firstName} {doctor.lastName}
                          </span>
                        </li>
                        <li className="flex py-2 border-y gap-16">
                          <span className="w-24 font-bold">
                            Specialization:
                          </span>
                          <span className="">{doctor.specialization}</span>
                        </li>

                        <li className="flex py-2 border-b">
                          <span className="w-24 font-bold">Mobile:</span>
                          <span className="">{doctor.contact}</span>
                        </li>
                        <li className="flex py-2 border-b">
                          <span className="w-24 font-bold">Email:</span>
                          <span className="">{doctor.email}</span>
                        </li>
                        <li className="flex py-2 border-b">
                          <span className="w-24 font-bold">Location:</span>
                          <span className="">
                            {doctor.wereda}, {doctor.kebele}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col w-full 2xl:w-2/3">
                    <div className="flex-1 p-8  bg-white dark:bg-gray-700 rounded-lg shadow-xl">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Appointments
                      </h4>
                      <div className=" mt-4">
                        <div className="flex flex-col items-end mb-10">
                          <div className="w-full rounded-lg shadow-xs">
                            <div className="w-full overflow-visible">
                              <table className="w-full sm:w-full">
                                <thead>
                                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">
                                      Patient Full Name
                                    </th>
                                    <th className="px-4 py-3">Office NUmber</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Time</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                  {appointments.map((appointment, index) => {
                                    const isSameDoctor =
                                      appointment.doctorId === doctorId;

                                    if (!isSameDoctor) return null;

                                    return (
                                      <tr
                                        key={index}
                                        className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400"
                                      >
                                        <td className="px-4 py-3">
                                          <div className="flex items-center text-sm">
                                            <div>
                                              <p className="font-semibold">
                                                {getPatientName(
                                                  appointment.patientId
                                                )}
                                              </p>
                                            </div>
                                          </div>
                                        </td>

                                        <td className="px-4 py-3 text-sm">
                                          {appointment.location}
                                        </td>

                                        <td className="px-4 py-3 text-sm">
                                          {appointment.date}
                                        </td>

                                        <td className="px-4 py-3 text-sm">
                                          {appointment.time}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-8  bg-white dark:bg-gray-700 rounded-lg shadow-xl">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Prescriptions
                      </h4>
                      <div className=" mt-4">
                        <div className="flex flex-col items-end mb-10">
                          <div className="w-full rounded-lg shadow-xs">
                            <div className="w-full overflow-visible">
                              <table className="w-full sm:w-full">
                                <thead>
                                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">
                                      Patient Full Name
                                    </th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Description</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                  {prescriptions.map((prescription, index) => {
                                    return prescription.doctorId.toString() ===
                                      doctorId.toString() ? (
                                      <tr
                                        key={index}
                                        className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400"
                                      >
                                        <td className="px-4 py-3">
                                          <div className="flex items-center text-sm">
                                            <div>
                                              <p className="font-semibold">
                                                {getPatientName(
                                                  prescription.patientId
                                                )}
                                              </p>
                                            </div>
                                          </div>
                                        </td>

                                        <td className="px-4 py-3 text-sm">
                                          {prescription.createdAt}
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                          {prescription.description}
                                        </td>
                                      </tr>
                                    ) : null;
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}
