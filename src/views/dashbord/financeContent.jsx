import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import currentUser from "../../redux/currentUser";
import { sendBackdiagnosis } from "../../redux/diagnosisSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default function FinanceContent(props) {
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );
  const patients = useSelector((state) => state.patients.patients);
  const doctors = useSelector((state) => state.doctors.doctors);
  const [prescriptionsWithNames, setPrescriptionWithNames] = useState([]);

  const getPatientName = (patientId) => {
    const patient = patients.find((p) => p.id == patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : "";
  };

  const getDoctorName = (doctorId) => {
    const doctor = doctors.find((d) => d.id == doctorId);
    return doctor ? `${doctor.firstName} ${doctor.lastName}` : "";
  };
  const [id, setId] = useState("");
  useEffect(() => {
    const prescriptionWithNames = prescriptions.map((prescription) => ({
      ...prescription,
      doctorName: getDoctorName(prescription.doctorId),
      patientName: getPatientName(prescription.patientId),
    }));
    setPrescriptionWithNames(prescriptionWithNames);
  }, []);
  const dispatch = useDispatch();

  const updatePrescriptionStatus = (prescId) => {
    const updatedPrescriptions = prescriptions.map((prescription) => {
      if (prescription.id === prescId) {
        return {
          ...prescription,
          status: "confirmed",
        };
      }
      return prescription;
    });
    const updatedPrescription = updatedPrescriptions.find(
      (prescription) => prescription.id === prescId
    );
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
          console.log("I will diapatch", prescription);
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
          <div className="w-full rounded-lg shadow-xs">
            <h1 className="py-4 text-xl font-bold text-center text-gray-500">
              Unpaid Prescriptions{" "}
            </h1>

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
                  {prescriptionsWithNames &&
                    prescriptionsWithNames.map(
                      (prescription, index) =>
                        prescription.status === "issued" && (
                          <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                            <td className="px-4 py-3 ">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold">
                                    {prescription.patientName}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold">
                                    {prescription.doctorName}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {prescription.dosage}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {prescription.date}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {prescription.price}
                            </td>

                            <td className="px-2 py-3">
                              <div className="inline-flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  <button
                                    onClick={() =>
                                      handleSubmit(prescription.id)
                                    }
                                    className="p-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-700"
                                  >
                                    Confirm payment
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                    )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full py-8 rounded-lg shadow-xs">
            <h1 className="py-4 text-xl font-bold text-center text-gray-500">
              Paid Prescriptions
            </h1>

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
                  {prescriptionsWithNames &&
                    prescriptionsWithNames.map(
                      (prescription, index) =>
                        prescription.status === "confirmed" && (
                          <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                            <td className="px-4 py-3 ">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold">
                                    {prescription.patientName}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold">
                                    {prescription.doctorName}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {prescription.dosage}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {prescription.date}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {prescription.price}
                            </td>
                          </tr>
                        )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
