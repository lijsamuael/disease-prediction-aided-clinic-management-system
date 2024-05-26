import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { sendBackPrescription } from "../../redux/prescriptionSlice";
export default function PrescriptionResult() {
  let { id } = useParams();

  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );

  const prescription = prescriptions.filter((item) => {
    if ("doc1" === item.docId)
      return {
        item,
      };
  });

  const data = prescription[0];

  useEffect(() => {
    // console.log(testResults);
  }, []);

  return (
    <>
      <div
        key={1}
        className=" bg-white overflow-x-hidden text-secondary-dark4  w-full h-full flex items-start justify-end gap-x-4 "
      >
        <div className="flex flex-col justify-between overflow-y-auto top-0 max-w-[1200px] overflow-x-hidden rounded-lg mx-auto my-8 ssm:w-[400px] bg-white border-2 border-gray-400 h-full  space-y-4">
          <div className="flex gap-16 bg-blue-500 text-white py-8 px-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">KIDANE MIHRET CLINIC</h1>
              <h1 className="font-mono flex justify-center items-center font-bold text-xl text-center mb-10">
                Fill Laboratory test results and send back to a doctor
              </h1>
            </div>
            <img className="w-24 h-24" src="/icons/logo1.png" alt="" />
          </div>
          <div className="w-full  px-6 pb-6  ">
            <label
              className=" block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Test Description
            </label>
            <p
              className="appearance-none flex items-start w-full h-full  text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Write a short description and background about the patient."
            >
              {data.description}
            </p>
          </div>
          <div className="grid grid-cols-2 mx-3 mb-6 gap-8">
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Patient ID
              </label>
              <p
                className="appearance-none block w-full  text-blue-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              >
                {data.patient_id}
              </p>
            </div>
            <div className="w-full  px-3">
              <label
                className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Issued Date
              </label>
              <p className="appearance-none block w-full  text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {data.issueDate}
              </p>
            </div>
          </div>
          <form className="mt-10   py-10  w-full mx-2 ">
            <div className="w-full px-6">
              <h3 className="mb-4 text-sm font-bold text-blue-500 dark:text-white">
                Test Results
              </h3>
              <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {data.results.map((test, index) => (
                  <li
                    key={index}
                    className="w-full grid grid-cols-2 gap-4 rounded-t-lg dark:border-gray-600"
                  >
                    {/* {test.map((tst, index) => ( */}
                    <div
                      key={index}
                      className="flex items-center pl-3 border border-gray-300 px-2"
                    >
                      <label
                        htmlFor={`test-${index}`}
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {test.test_name}
                      </label>
                      <p className="w-16 h-8 text-blue-600 bg-gray-100 border border-gray-200  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        {test.values}
                      </p>
                    </div>
                    {/* ))} */}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-64  px-6 pt-8">
              <label
                className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Confirmation Date
              </label>
              <p className="appearance-none block w-full  text-blue-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {data.confirmDate}
              </p>
            </div>

            {/* <div className="flex w-full justify-between px-[4%] gap-16">
              <button
                // onClick={handleClose}
                type=""
                className="bg-red-500  text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-red-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                type=""
                className="bg-primary  text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
              >
                Send Lab Test
              </button>
            </div> */}
          </form>
        </div>
      </div>
      )
    </>
  );
}
