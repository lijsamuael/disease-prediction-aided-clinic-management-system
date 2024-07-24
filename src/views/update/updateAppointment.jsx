import React from "react";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointment } from "../../redux/appointmentSlice";
export default function UpdateAppointment(showModal) {
  const doctors = useSelector((state) => state.doctors.doctors);
  const apt = showModal.appointmentToBeUpdated;
  const modal = showModal.showModal;
  const close = showModal.handleClose;
  console.log("apt", showModal.appointmentToBeUpdated);
  console.log("modal", modal);
  const [formData, setFormData] = useState({
    id: apt ? apt.id : "",
    doctorId: apt ? apt.doctorId : "",
    patientId: apt ? apt.patientId : "",
    appointmentFee: apt ? apt.appointmentFee : "",
    location: apt ? apt.location : "",
    date: apt ? apt.date : "",
    time: apt ? apt.time : "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const appointment = {
    id: formData.id,
    doctorId: formData.doctorId,
    patientId: formData.patientId,
    appointmentFee: formData.appointmentFee,
    location: formData.location,
    date: formData.date,
    time: formData.time,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateAppointment(appointment));
    Swal.fire("Updated!", "appointment has been updated.", "success").then(
      (result) => {
        if (result.isConfirmed) {
          close();
        }
      }
    );
  };

  const handleDoctor = (event) => {
    const selectedDoctorId = event.target.value;
    setFormData({ ...formData, doctorId: selectedDoctorId });
  };

  return (
    <>
      {modal && (
        <form class="m-auto relative top-10  mt-10 z-100 bg-opacity-40 border-2 bg-black border-gray-200 box-content p-10 w-full max-w-lg">
          <h1 class="font-bold text-xl text-center mb-10">
            update Appointment information
          </h1>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Doctors's Name
              </label>
              S
              <div class="relative">
                <select
                  name="doctorId"
                  onChange={handleDoctor}
                  value={formData.doctorId}
                  class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  {doctors.map((doctor, index) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  ))}
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="w-full mt-5 md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Appointment Location
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="appointment location"
              />
            </div>

            <div class="w-full mt-5 md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Patient's Card Number
              </label>
              <input
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
                class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Patients Card Number"
              />
            </div>
            <div class="w-full px-3 md:w-1/2 mt-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Appointment Fee in birr
              </label>
              <input
                name="appointmentFee"
                value={formData.appointmentFee}
                onChange={handleChange}
                class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                placeholder="Fee for Appointment"
              />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Date
              </label>
              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                placeholder="fill date in E.C"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Time
              </label>
              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="time"
                placeholder="Fill Identification Number"
              />
            </div>
          </div>

          <div className="flex justify-around w-full">
            <button
              onClick={close}
              type=""
              className="px-10 py-2 mt-5 font-bold text-white transition-colors bg-red-500 rounded shadow focus:outline-none hover:bg-red-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type=""
              className="px-10 py-2 mt-5 font-bold text-white transition-colors rounded shadow bg-primary focus:outline-none hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </>
  );
}
