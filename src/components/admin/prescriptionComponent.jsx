import React from "react";
import { useState, useEffect } from "react";
// import prescription from "../../models/prescription.json"
// import doctors from "../../models/doctors.json"
// import patients from "../../models/patients.json"
import { useSelector } from "react-redux";
import { useCallback } from "react";
export default function PrescriptionComponent(props) {
  const patients = useSelector((state) => state.patients.patients);
  const doctors = useSelector((state) => state.doctors.doctors);
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );
  const [namedPrescriptions, setNamedPrescriptions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const getPatientName = (patientId) => {
    const patient = patients.find((p) => p.id === patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : "";
  };

  const getDoctorName = (doctorId) => {
    const doctor = doctors.find((d) => d.id == doctorId);
    return doctor ? `${doctor.firstName} ${doctor.lastName}` : "";
  };
  useEffect(() => {
    const prescriptionsWithNames = prescriptions.map((p) => ({
      ...p,
      patientName: getPatientName(p.patientId),
      doctorName: getDoctorName(p.doctorId),
    }));
    setNamedPrescriptions(prescriptionsWithNames);
    handleSearch();
  }, []);

  const handleSearch = useCallback(
    (e) => {
      if (e) {
        e.preventDefault();
      }
      const results = namedPrescriptions.filter((prescription) => {
        const searchQuery = searchText.toLowerCase();
        const doctorName = prescription.doctorName.toLowerCase();
        const patientName = prescription.patientName.toLowerCase();
        const issueDate = prescription.issueDate;
        const status = prescription.status.toLowerCase();
        return (
          doctorName.includes(searchQuery) ||
          patientName.includes(searchQuery) ||
          // issueDate.includes(searchQuery) ||
          status.includes(searchQuery)
        );
      });
      setSearchResults(results);
    },
    [searchText, namedPrescriptions]
  );

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  // Rest of your component code...

  return (
    <>
      <h1 className="px-2 py-4 font-mono text-3xl font-bold tracking-widest text-center text-gray-700 ">
        Lab Orders
      </h1>
      <div className="mx-4 mt-7">
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
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search prescription  by thire doctor,patients,issueDate and status"
              />
            </div>
            <button
              type="submit"
              onClick={handleSearch}
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
        </div>
        <div className="w-full rounded-lg shadow-xs">
          <div className="w-full overflow-visible">
            <table className="w-full sm:w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Patient Name</th>
                  <th className="px-4 py-3">Doctor Name</th>

                  <th className="px-4 py-3">issued Date</th>
                  <th className="px-4 py-3">Confirm Date</th>

                  <th className="px-4 py-3">status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {searchResults &&
                  searchResults.map((prescription, index) => (
                    <tr
                      key={index}
                      className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400"
                    >
                      <td>
                        <div>
                          <p className="font-semibold">
                            {prescription.patientName}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        <div>
                          <div className="flex">
                            {/* <img
                            className="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                            alt=""
                            loading="lazy"
                          /> */}
                            <div className="flex items-center text-sm">
                              <p className="font-semibold">
                                {prescription.doctorName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm">
                        {prescription.issueDate}
                      </td>
                      <td className="p-3 text-right">
                        {prescription.status == "issued" ? (
                          <>
                            <td className="px-4 py-3 text-xs">
                              <span className="px-2 py-1 font-semibold leading-tight text-blue-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                ..............
                              </span>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="px-4 py-3 text-sm">
                              {prescription.confirmDate}
                            </td>
                          </>
                        )}
                      </td>
                      <td className="p-3 text-right">
                        {prescription.status == "issued" ? (
                          <>
                            <td className="px-4 py-3 text-xs">
                              <span className="px-2 py-1 font-semibold leading-tight text-blue-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                issued
                              </span>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="px-4 py-3 text-xs">
                              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                Confirmed
                              </span>
                            </td>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
