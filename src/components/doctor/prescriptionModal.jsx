import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
// import prsc from "../../models/prescriptions.json";
import testName from "../../models/testNames.json";
import { v4 as uuidv4 } from "uuid";
import { sendPrescriptions } from "../../redux/prescriptionSlice";
import { addTestName } from "../../redux/testNameSlice";
import { useNavigate } from "react-router-dom";

export default function PrescriptionModal() {
  const navigate = useNavigate();
  let { id } = useParams();

  const currentUser = useSelector((state) => state.currentUser.currentDoctor);
  const dispatch = useDispatch();
  const authenticatedDoctorId = currentUser.id;
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [selectedTests, setSelectedTests] = useState([]);

  const handleTestChange = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
    console.log(selectedTests);
  };

  const prescription = {
    id: uuidv4(),
    patientId: id.replace(":", ""),
    issueDate: date,
    confirmDate: Date.now(),
    doctorId: authenticatedDoctorId,
    description: description,
    status: "issued",
  };
  const testNames = {
    id: "",
    prescId: prescription.id,
    testName: "",
    value: "",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "the data to pe sent to the lab, cvdsdfsdfsdfsdkoaksdilaskdflskfjabeb  als as sldflasdjflfkjdapre",
      prescription
    );
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send prescription!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(sendPrescriptions(prescription));
          selectedTests.forEach((test) => {
            const updatedTest = {
              ...testNames,
              testName: test,
              id: uuidv4(),
            };
            dispatch(addTestName(updatedTest));
          });
        } catch (error) {
          console.log("An error occurred:", error);
        }
      }
    });
    // dispatch(updatePatient(patient));
  };

  // useEffect(() => {
  //   // localStorage.clear();
  //   console.log(prescription);
  // }, [selectedTests]);

  return (
    <>
      <div className="fixed top-0 left-0 z-10 flex items-start justify-end w-full h-full bg-gray-800 text-secondary-dark4 gap-x-4 bg-opacity-60">
        <div className="flex flex-col justify-between overflow-y-auto top-0 max-w-[1800px] rounded-lg mx-auto my-16 pb-28 ssm:w-[400px] bg-white dark:bg-gray-800 h-full  space-y-4">
          <div className="flex gap-16 px-4 py-8 text-white bg-blue-500 dark:bg-gray-700">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">MediConnect</h1>
              <h1 className="flex items-center justify-center mb-10 font-mono text-xl font-bold text-center">
                Fill the information and Send Prescription to a Laboratorian
              </h1>
            </div>
            <img className="w-24 h-24" src="/icons/logo1.png" alt="" />
          </div>

          <form className="w-full py-10 mx-2 mt-10 border-2 border-gray-200 dark:border-gray-600 ">
            <div className="w-full px-6 pb-6 ">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-blue-500 uppercase "
                for="grid-zip"
              >
                Test Description
              </label>
              <textarea
                className="flex items-start bg-white dark:bg-gray-700 w-full h-32 px-4 py-3 leading-tight text-black dark:text-white border border-gray-200 dark:border-gray-500 rounded appearance-none focus:outline-none  focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Write a short description  and background about the patient."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-8 mx-3 mb-6">
              <div className="w-full px-3">
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-blue-500 pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-blue-500 uppercase"
                  for="grid-last-name"
                >
                  Issued Date
                </label>
                <input
                  className="block w-full bg-white dark:bg-gray-700 px-4 py-3 leading-tight text-blue-500 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="date"
                  placeholder="fill date in E.C"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full px-6">
              <h3 className="mb-4 text-sm font-bold text-blue-500 dark:text-white">
                TO BE TESTED
              </h3>
              <ul className="grid w-full grid-cols-2 text-sm font-medium text-gray-900 bg-white md:grid-cols-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {testName.map((test, index) => (
                  <li
                    key={index}
                    className="w-full rounded-t-lg dark:border-gray-600"
                  >
                    <div className="flex items-center pl-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        checked={selectedTests.includes(test)}
                        onChange={() => handleTestChange(test)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={`test-${index}`}
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {test}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full justify-between px-[4%] gap-16">
              <Link
                to={"/doctor"}
                type=""
                className="px-10 py-2 mt-5 font-bold text-white transition-colors bg-red-500 rounded shadow focus:outline-none hover:bg-red-700"
              >
                Go Back
              </Link>
              <button
                onClick={handleSubmit}
                type=""
                className="px-10 py-2 mt-5 font-bold text-white transition-colors rounded shadow bg-primary focus:outline-none hover:bg-blue-700"
              >
                Send Prescription
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
