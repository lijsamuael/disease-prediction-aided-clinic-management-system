import { useState } from "react";
import axios from "axios";

const EditPatientInfo = ({ onClose, patientInfo, onSubmit }) => {
  const [firstName, setFirstName] = useState(patientInfo.firstName);
  const [lastName, setLastName] = useState(patientInfo.lastName);
  const [username, setUserName] = useState(patientInfo.username);
  const [password, setPassword] = useState(patientInfo.password);
  const [email, setEmail] = useState(patientInfo.email);
  const [contact, setContact] = useState(patientInfo.contact);
  const [state, setStateT] = useState(patientInfo.state);
  const [wereda, setWereda] = useState(patientInfo.wereda);
  const [kebele, setKebele] = useState(patientInfo.kebele);
  const [selectedImage, setSelectedImage] = useState(patientInfo.photo);
  const [imagePreview, setImagePreview] = useState(patientInfo.photo);

  const newpatientInfo = {
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
    photo: selectedImage,
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      console.log("");
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    // Create a FormData object to send the file
    const formData = new FormData();
    console.log("form data", file);
    formData.append("image", file); // 'image' should match the field name expected by the server

    await axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        console.log(response.data);
        setSelectedImage(response.data.filename);
        console.log("patinet to be updated", newpatientInfo);
      })
      .catch((error) => {
        console.log("error in uploading image", error);
      });
  };

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
    <div className="mx-auto-xl max-w-l pb-4">
      <h2 className="mb-6 text-2xl font-bold py-6 ">
        Edit Personal Information
      </h2>
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
            type="password"
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
