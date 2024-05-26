import React, { useState, useEffect } from "react";
// import './add.js'
import doctors from "../../models/doctors.json";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {updatePatient } from "../../redux/patientSlice.jsx";

export default function UpdatePatient({
  showModal,
  handleClose,
  patientToBeUpdated,
}) {
  const [firstName, setFirstName] = useState(patientToBeUpdated.firstName);
  const [lastName, setLastName] = useState(patientToBeUpdated.lastName);
  const [description, setDescription] = useState(patientToBeUpdated.description);
  const [assignedDoctor, setAssignedDoctor] = useState(patientToBeUpdated.doctorId);
  const [gender, setGender] = useState(patientToBeUpdated.gender);
  // const [id, setId] = useState(patientToBeUpdated.id);
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState(patientToBeUpdated.password);
  const [phone, setPhone] = useState(patientToBeUpdated.contact);
  const [userName, setUserName] = useState(patientToBeUpdated.userName);
  const [email, setEmail] = useState(patientToBeUpdated.email);
  const [date, setDate] = useState(patientToBeUpdated.date);
  const [state, setState] = useState(patientToBeUpdated.state);
  const [wereda, setWereda] = useState(patientToBeUpdated.wereda);
  const [kebele, setKebele] = useState(patientToBeUpdated.kebele);
  const [cardNumber, setCardNumber] = useState(patientToBeUpdated.cardNumber);
  const [selectedImage,setSelectedImage] = useState(patientToBeUpdated.photo);
  const [imagePreview, setImagePreview] = useState(patientToBeUpdated.photo);
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

   useEffect(()=>{
     
   },[showModal])
  
  const patient ={
    id:patientToBeUpdated.id,
    firstName: firstName,
    lastName: lastName,
    description: description,
    photo: selectedImage,
    doctorId: assignedDoctor,
    gender: gender,
    password: password,
    contact: phone,
    username: userName,
    email: email,
    date: date,
    state: state,
    wereda: wereda,
    kebele: kebele,
    cardNumber: cardNumber,
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
        dispatch(updatePatient(patient));
       await   Swal.fire("Updated!",`the record updated successfully.`, "success").then((result)=>{
           if(result.isConfirmed){
          handleClose()
          }
        }) 
        
  };

  useEffect(() => {
    console.log(patientToBeUpdated);
  },[]);
 
  if (!patientToBeUpdated) {
    return <div>Loading...</div>; // Or any other appropriate loading state
  }
  return (
    <> 
      {showModal &&(
        <div className="fixed top-0 left-0 z-10 flex items-start justify-end w-full h-full bg-gray-800 text-secondary-dark4 gap-x-4 bg-opacity-40">
          <div className="flex flex-col justify-between overflow-y-auto top-0 max-w-[1200px] rounded-lg mx-auto my-16 pb-28 ssm:w-[400px] bg-white h-full  space-y-4 px-4 ">
            <form className="box-content w-full max-w-lg p-10 m-auto mt-10 border-2 border-gray-200">
              <h1 className="mb-10 text-xl font-bold text-center">
                Update The Information of the Patient
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

                <div className="w-full px-3 mt-6">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-password"
                  >
                    age
                  </label>
                  <input
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  {/* <p className="text-xs italic text-gray-600">Make it as long and </p> */}
                </div>
                <div className="w-full px-3 mt-6">
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
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {/* <p className="text-xs italic text-gray-600">Make it as long and </p> */}
                </div>
                <div className="w-full px-3 mt-6">
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
                  {/* <p className="text-xs italic text-gray-600">Make it as long and </p> */}
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
                  {/* <p className="text-xs italic text-gray-600">Make it as long and </p> */}
                </div>

                <div className="w-full px-3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-last-name"
                  >
                    Birth Date
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="date"
                    placeholder="fill date in E.C"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="w-full px-3">
                  <label
                    className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                    for="grid-last-name"
                  >
                    Card Number
                  </label>
                  <input
                    className="block w-full px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Fill Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
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
                  {/* <p className="text-xs italic text-gray-600">Make it as long and </p> */}
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
              <div className="w-full px-3 pt-8">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  for="grid-zip"
                >
                  Patient Description
                </label>
                <textarea
                  className="flex items-start w-full h-32 px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Write a short description and background about the patient."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="relative pt-8 m-4">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor=""
                >
                  Choose a doctor and assign to the patient
                </label>
                <select
                  className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={assignedDoctor}
                  onChange={(e) => setAssignedDoctor(e.target.value)}
                >
                  {doctors.map((doctor, index) => (
                    <option>
                      {doctor.firstName} {doctor.lastName}
                    </option>
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

              <div className="w-64 pt-8 mx-auto">
                <img
                  className="p-2 mx-auto mt-12 border rounded-lg h-52 w-52 md:mt-0"
                  src={imagePreview}
                  alt="step"
                />
                <div className="m-4">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full border-4 border-gray-200 border-dashed cursor-pointer h-14 hover:border-gray-300 hover:bg-gray-100">
                      <div className="flex items-center justify-center mt-4 space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>

                        <p className="text-sm tracking-wider text-gray-400 font-laonoto group-hover:text-gray-600">
                          Choose Profile Picture
                        </p>
                      </div>
                      <input
                        type="file"
                        className="opacity-0"
                        value=""
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
