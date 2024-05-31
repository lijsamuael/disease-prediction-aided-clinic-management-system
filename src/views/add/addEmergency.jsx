import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddEmergency() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const patient = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    contact: phone,
    age: age,
    phone: phone,
    location: location,
    description: description,
  };

  const handleSubmit = async (event) => {
    console.log(patient);

    event.preventDefault();

    try {
      const response = axios
        .post("http://localhost:5000/emergencies", patient)
        .then(() => {
          console.log(response.data);
          Swal.fire({
            icon: "success",
            title: "Emergency Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } catch (error) {
      console.log("error");
      await Swal.fire({
        icon: "error",
        title: "Emergency Request Failed, Try again",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form className="box-content w-full max-w-4xl p-10 m-auto mt-10 border-2 border-gray-200">
      <div className="grid grid-cols-2 gap-8 mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-last-name"
          >
            First Name
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700  border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700  border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-state"
          >
            Gender
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 dark:text-gray-400  border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white pointer-events-none">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-password"
          >
            Phone Number
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700  border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Fill phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-password"
          >
            Age
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700  border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Enter Ager"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-password"
          >
            Location
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700  border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Enter the location of the patient"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="w-full px-3 col-span-2">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 dark:text-white uppercase"
            for="grid-password"
          >
            Description
          </label>
          <textarea
            className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700  border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Write patient situation"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-around w-full">
        <button
          onClick={handleSubmit}
          type=""
          className="px-10 py-2 mt-5 font-bold text-white transition-colors rounded shadow bg-primary focus:outline-none hover:bg-blue-700"
        >
          Request For Emergency
        </button>
      </div>
    </form>
  );
}
