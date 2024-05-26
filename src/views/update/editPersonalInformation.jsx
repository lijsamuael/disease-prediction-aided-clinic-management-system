import { useState } from "react";

const EditPatientInfo = ({ onClose,patientInfo, onSubmit }) =>{
  const [firstName, setFirstName] = useState(patientInfo.firstName);
  const [lastName, setLastName] = useState(patientInfo.lastName);
  const [username, setUserName] = useState(patientInfo.username);
  const [password, setPassword] = useState(patientInfo.password);
  const [email, setEmail] = useState(patientInfo.email);
  const [contact, setContact] = useState(patientInfo.contact);
  const [state, setStateT] = useState(patientInfo.state);
  const [wereda, setWereda] = useState(patientInfo.wereda);
  const [kebele, setKebele] = useState(patientInfo.kebele);
   
  
  const newpatientInfo={
    
    ...patientInfo,  
    firstName,
    lastName,
    username,
    password,
    email,
    contact,
    state,
    wereda,
    kebele,

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newpatientInfo);
  };
  
  const addressAssignment = (e) => {
    const temp = e.split(",", 3);
    setStateT(temp[0]);
    setWereda(temp[1]);
    setKebele(temp[3]);
  };

  return (
    <div className="mx-auto-xl max-w-l">
      <h2 className="mb-6 text-2xl font-bold">Edit Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 font-bold text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 font-bold text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
         
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 font-bold text-gray-700"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 font-bold text-gray-700"
          >
            password
          </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contact"
            className="block mb-2 font-bold text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block mb-2 font-bold text-gray-700"
          >
            Address
          </label>
          <textarea
            id="address"
            value={`${state}, ${wereda}, ${kebele}`}
            onChange={(e) => addressAssignment(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPatientInfo;
