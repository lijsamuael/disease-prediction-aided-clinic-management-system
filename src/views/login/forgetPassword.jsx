import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePatient } from "../../redux/patientSlice";
export default function ForgetPassword(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [patientId, setId] = useState("");
  const [password, setPassword] = useState("");
  
  const patients = useSelector((state) => state.patients.patients);
  const handlePatientIdChange = (event) => {
    setId(event.target.value);
  };
  const handleNewPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    console.log("fired patient id", patientId);
    event.preventDefault();
    const patientToUpdate = patients.find((p) => p.id === patientId);

    if (patientToUpdate) {
      console.log("patient to update is", patientToUpdate);
      const updatedPatient = { ...patientToUpdate, password: password };
      dispatch(updatePatient(updatedPatient));
      await Swal.fire(
        "Updated!",
        `the password updated successfully.`,
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          navigate("/adminDashbord");
        }
      });
    }
  };

  return (
    <>
      <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                Reset password ?
              </h1>
            </div>

            <div class="mt-5">
              <form onSubmit={handleSubmit}>
                <div class="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Identification Number
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="email"
                        onChange={handlePatientIdChange}
                        value={patientId}
                        class="py-3 px-4 block dark:text-black w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      New password
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="email"
                        value={password}
                        onChange={handleNewPasswordChange}
                        class="py-3 px-4 block dark:text-black w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
