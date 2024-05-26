import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import currentUser from "../../redux/currentUser";
import { sendBackdiagnosis } from "../../redux/diagnosisSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default function FinanceContent(props) {
    const prescriptions = useSelector((state) => state.diagnosises.diagnosises)
    const patients = useSelector((state) => state.patients.patients)
    const doctors = useSelector((state) => state.doctors.doctors)
    const [prescriptionsWithNames, setPrescriptionWithNames] = useState([]);

    const getPatientName = (patientId) => {
        const patient = patients.find((p) => p.id === patientId);
        return patient ? `${patient.firstName} ${patient.lastName}` : '';
    };

    const getDoctorName = (doctorId) => {
        const doctor = doctors.find((d) => d.id === doctorId);
        return doctor ? `${doctor.firstName} ${doctor.lastName}` : '';
    };
    const [id, setId] = useState("")
    useEffect(() => {
        const prescriptionWithNames = prescriptions.map((prescription) => ({
            ...prescription,
            doctorName: getDoctorName(prescription.doctorId),
            patientName: getPatientName(prescription.patientId),
        }));
        setPrescriptionWithNames(prescriptionWithNames)
    }, []);
    const dispatch = useDispatch();

    const updatePrescriptionStatus = (prescId) => {
        const updatedPrescriptions = prescriptions.map((prescription) => {
          if (prescription.id === prescId) {
            return {
              ...prescription,
              status: "paid",
            };
          }
          return prescription;
        });      
        const updatedPrescription = updatedPrescriptions.find((prescription) => prescription.id === prescId);
        if (updatedPrescription) {
          return updatedPrescription;
        } else {
          Swal.fire("Payment not Confirmed.");
          return null;
        }
      };
    const handleSubmit = (prescId) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm paid!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Call the updatePrescriptionStatus function with the prescription ID and status
                    const prescription = await updatePrescriptionStatus(prescId);
                     console.log("I will diapatch",prescription)
                    dispatch(sendBackdiagnosis(prescription));
                } catch (error) {
                    console.log("An error occurred:", error);
                }
            }
        });
    };

    return (
        <>
            <div className="mx-4 mt-4">
                <div className="flex flex-col items-end mb-10">
                    {/* <form className="flex items-center w-full">
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
                    </form> */}

                    <div className="w-full rounded-lg shadow-xs">
                        <h1 className="py-4 text-xl font-bold text-center text-gray-500">Unpaid Prescriptions </h1>

                        <div className="w-full overflow-visible">
                            <table className="w-full sm:w-full">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">Patient Full Name</th>
                                        <th className="px-4 py-3">Sender Doctor</th>
                                        <th className="px-4 py-3">Dosage</th>
                                        <th className="px-4 py-3">Issued Date</th>
                                        <th className="px-4 py-3">Price</th>

                                        {/* <th className="px-4 py-3">Test Detail</th> */}
                                        <th className="px-4 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {prescriptionsWithNames && prescriptionsWithNames.map((prescription, index) => prescription.status === "unpaid" && (
                                        <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                                            <td className="px-4 py-3 ">
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
                                                        <p className="font-semibold">{prescription.patientName}</p>
                                                    </div>
                                                </div>
                                            </td>

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
                                                        <p className="font-semibold">{prescription.doctorName}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{prescription.dosage}</td>
                                            <td className="px-4 py-3 text-sm">{prescription.date}</td>
                                            <td className="px-4 py-3 text-sm">{prescription.price}</td>
                                            {/* <td>
                      <div className="flex-shrink-0">
                        <a
                          href="/"
                          className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                        >
                          Test Detail
                        </a>
                      </div>
                    </td> */}
                                            {/* <td className="px-4 py-3 text-sm">{prescription.confirmTime}</td> */}

                                            <td className="px-2 py-3">
                                                <div className="inline-flex items-center space-x-3">
                                                    <div className="flex-shrink-0">
                                                        <button onClick={() => handleSubmit(prescription.id)}
                                                            className="p-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-700"
                                                        >
                                                            Confirm payment
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
                    <div className="w-full py-8 rounded-lg shadow-xs">
                        <h1 className="py-4 text-xl font-bold text-center text-gray-500">Paid Prescriptions</h1>

                        <div className="w-full overflow-visible">
                            <table className="w-full sm:w-full">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">Patient Full Name</th>
                                        <th className="px-4 py-3">Sender Doctor</th>
                                        <th className="px-4 py-3">Dosage</th>
                                        <th className="px-4 py-3">Issued Date</th>
                                        <th className="px-4 py-3">Price</th>

                                        {/* <th className="px-4 py-3">Test Detail</th> */}
                                        {/* <th className="px-4 py-4">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {prescriptionsWithNames && prescriptionsWithNames.map((prescription, index) => prescription.status === "paid" && (
                                        <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                                            <td className="px-4 py-3 ">
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
                                                        <p className="font-semibold">{prescription.patientName}</p>
                                                    </div>
                                                </div>
                                            </td>

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
                                                        <p className="font-semibold">{prescription.doctorName}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm">{prescription.dosage}</td>
                                            <td className="px-4 py-3 text-sm">{prescription.date}</td>
                                            <td className="px-4 py-3 text-sm">{prescription.price}</td>
                                            {/* <td>
                      <div className="flex-shrink-0">
                        <a
                          href="/"
                          className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
                        >
                          Test Detail
                        </a>
                      </div>
                    </td> */}
                                            {/* <td className="px-4 py-3 text-sm">{prescription.confirmTime}</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
