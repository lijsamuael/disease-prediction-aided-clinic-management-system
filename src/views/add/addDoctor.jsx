import React, { useState, useEffect } from "react";
// import './add.js'
import specializations from "../../models/specializations.json";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addDoctor } from "../../redux/doctorSlice";

export default function AddDoctor({
  showModal,
  handleClose,
  doctorToBeUpdated,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialization, setSpecialization] = useState("Doctor");
  const [gender, setGender] = useState("male");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [wereda, setWereda] = useState("");
  const [kebele, setKebele] = useState("");
  const [selectedImage, setSelectedImage] = useState("ph.webp");
  const [imagePreview, setImagePreview] = useState("ph.webp");

  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const patient = {
    firstName: firstName,
    lastName: lastName,
    photo: selectedImage.name,
    specialization: specialization,
    gender: gender,
    // id:uuidv4(),
    email: email,
    password: password,
    contact: phone,
    username: username,
    // date: date,
    state: state,
    wereda: wereda,
    kebele: kebele,
  };
  const handleSubmit = async (event) => {
    console.log(patient);

    event.preventDefault();
    dispatch(addDoctor(patient));

    await Swal.fire({
      icon: "success",
      title: "Doctor Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    console.log(doctorToBeUpdated);
  }, []);

  return (
    <form className="box-content w-full max-w-lg p-10 m-auto mt-10 border-2 border-gray-200">
      <h1 className="mb-10 text-xl font-bold text-center">
        Kidane Mihret Clinic Doctor Registration Form
      </h1>
      <div className="grid grid-cols-2 gap-8 mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-last-name"
          >
            First Name
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-state"
          >
            Gender
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
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
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-password"
          >
            Username
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-password"
          >
            Password
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="login password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-password"
          >
            email
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full px-3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-password"
          >
            Phone Number
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Fill phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-2 -mx-3">
        <div className="w-full px-3 md:w-1/3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-state"
          >
            State
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="amhara">Amhara</option>
              <option value="oromia">Oromia</option>
              <option value="snnpr">SNNPR</option>
              <option value="tigray">Tigray</option>
              <option value="gambela">Gambala</option>
              <option value="somaliya">Somaliya</option>
              <option value="hareri">Hareri</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
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
        <div className="w-full px-3 md:w-1/3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-city"
          >
            City/Wereda
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Woreda"
            value={wereda}
            onChange={(e) => setWereda(e.target.value)}
          />
        </div>

        <div className="w-full px-3 md:w-1/3 ">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="grid-zip"
          >
            kebele
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="kebele"
            value={kebele}
            onChange={(e) => setKebele(e.target.value)}
          />
        </div>
      </div>

      <div className="relative pt-8 m-4">
        <label
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
          htmlFor=""
        >
          Specialization
        </label>
        <select
          className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          {specializations.specializations.map((item, index) => (
            <option>{item}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <div className="flex justify-around w-full">
        <button
          onClick={handleClose}
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
          Add Doctor
        </button>
      </div>
    </form>
  );
}
