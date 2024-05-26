import React, { useEffect } from "react";
import "./add.js";
import { useState } from "react";
import { updatePatient } from "../../redux/patientSlice.jsx";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addAppointment } from "../../redux/appointmentSlice.jsx";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";

export default function AddAppointment({
  showModal,
  handleClose,
  appointmentToBeUpdated,
}) {
  const doctors = useSelector((state) => state.doctors.doctors);
  const [selectedDoctorId, setSelectedDoctorId] = useState();
  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/adminDashbord/appointment"); // Navigates back one step in the history stack
  };
  const { patientId } = useParams();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    doctorId: "",
    patientId: patientId,
    appointmentFee: "100",
    location: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDoctor = (event) => {
    setSelectedDoctorId(event.target.value);
  };

  const handleSubmit = async (event) => {
    const patientToUpdate = patients.find((p) => p.id === patientId);

    event.preventDefault();

    console.log("appointment", formData);

    await dispatch(addAppointment(formData));

    if (patientToUpdate) {
      const updatedPatient = { ...patientToUpdate, isNew: "no" };
      console.log("Oh My God the patient is ", patientToUpdate);

      dispatch(updatePatient(updatedPatient));
    }

    Swal.fire({
      icon: "success",
      title: "Appointment Added Successfully",
      showConfirmButton: true,
      timer: 1800,
    });

    navigate("/adminDashbord/appointment");
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      doctorId: selectedDoctorId,
    }));
    console.log("selected doctor id", selectedDoctorId);
    console.log("form data when doctor changed", formData);
  }, [selectedDoctorId]);

  return (
    <>
      <form class="m-auto mt-10 border-2 border-gray-200 box-content p-10 w-full max-w-lg">
        <h1 class="font-bold text-xl text-center mb-10">
          Add Appointment Form
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Doctors's Name
            </label>
            <div class="relative">
              <select
                name="doctorId"
                onChange={handleDoctor}
                value={formData.doctorId}
                class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option className="bg-white" key="123" value={5}>
                  Select Doctor
                </option>
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
            onClick={goBack}
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
            Add Appointment
          </button>
        </div>
      </form>
    </>
  );
}
