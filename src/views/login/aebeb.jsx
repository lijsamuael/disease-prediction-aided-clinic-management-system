import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addPatient } from "../../redux/patientSlice";

export default function SingUp() {
  const initialValues = {
    id: v4(),
    firstName: "",
    lastName: "",
    age: "",
    description: "",
    photo:
      "https://w7.pngwing.com/pngs/328/335/png-transparent-icon-user-male-avatar-business-person-profile.png",
    gender: "",
    password: "",
    contact: "",
    username: "",
    email: "",
    date: Date.now(),
    state: "Amhara",
    wereda: "Bahir Dar",
    kebele: "Poly",
    cardNumber: "",
    isNew: "yes",
    fee: "",
  };

  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate(); // Create a history object
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: v4(),
    firstName: "",
    lastName: "",
    age: "",
    description: "",
    photo:
      "https://w7.pngwing.com/pngs/328/335/png-transparent-icon-user-male-avatar-business-person-profile.png",
    gender: "",
    password: "",
    contact: "",
    username: "",
    email: "",
    date: Date.now(),
    state: "Amhara",
    wereda: "Bahir Dar",
    kebele: "Poly",
    cardNumber: "",
    isNew: "yes",
    fee: "",
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number().required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().required("Password is required"),
    contact: Yup.string().required("Phone number is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    state: Yup.string().required("State is required"),
    wereda: Yup.string().required("City/Wereda is required"),
    kebele: Yup.string().required("Kebele is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .test("phone-number", "Phone number must start with '+2519'", (value) => {
        if (!value) return true; // Allow empty value to be handled by the 'required' validation
        return /^\+2519/.test(value);
      })
      .test(
        "phone-number-length",
        "Phone number must be exactly 13 characters long",
        (value) => {
          if (!value) return true; // Allow empty value to be handled by the 'required' validation
          return /^\+2519\d{9}$/.test(value);
        }
      ),
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/patients",
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="w-full p-8 bg-white md:flex md:items-center md:justify-center sm:w-auto md:h-full xl:w-2/5 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none"
      style={{ fontFamily: "Poltawski Nowy" }}
    >
      <div className="w-full max-w-md space-y-4">
        <div className="pt-8 text-center">
          <h2 className="mt-6 text-xl font-semi-bold text-gray-900 lg:text-4xl">
            Welcome to MediConnect Patient Registration Form
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Please Register to access our services.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            onSubmit={handleSubmit}
            className="pb-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <label className=" text-sm font-bold tracking-wide text-gray-700">
                first name
              </label>
              <Field
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your last name"
                name="firstName"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="relative">
              <label className="text-sm font-bold tracking-wide text-gray-700">
                Last Name
              </label>
              <Field
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your last name"
                name="lastName"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="flex justify-between pr-8">
              <div className="w-1/2  mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Gender
                </label>
                <div className="relative">
                  <select
                    // onChange={handleChange} value={formData.gender} name="gender"
                    className="block appearance-none w-full bg-white border-2 border-gray-300  text-gray-700 py-[10.5px] px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="grid-state"
                  >
                    <option>male</option>
                    <option>Female</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Age
                </label>
                <Field
                  className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Enter your last name"
                  name="age"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            <div className="relative">
              <label className=" text-sm font-bold tracking-wide text-gray-700">
                username
              </label>
              <Field
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your last name"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="content-center mt-8">
              <label className=" text-sm font-bold tracking-wide text-gray-700">
                Password
              </label>
              <Field
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your last name"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="content-center mt-8">
              <label className=" text-sm font-bold tracking-wide text-gray-700">
                Email
              </label>
              <Field
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your last name"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div className="content-center mt-8">
              <label className=" text-sm font-bold tracking-wide text-gray-700">
                Phone Number
              </label>
              <Field
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your last name"
                name="phoneNumber"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div class="relative">
                  <select
                    name="state"
                    // value={formData.state} onChange={handleChange}
                    class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>Amhara</option>
                    <option>Oromia</option>
                    <option>SNNPR</option>
                    <option>Tigray</option>
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
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City/Wereda
                </label>
                {/* <input name="wereda" value={formData.wereda} onChange={handleChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Woreda" /> */}
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  kebele
                </label>
                {/* <input name="kebele" value={formData.kebele} onChange={handleChange} class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="kebele" /> */}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="w-4 h-4 bg-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <label
                  for="remember_me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="/" className="text-indigo-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                // to="/signIn/payment"
                className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600"
              >
                Register
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-gray-500 text-md">
              <span>Already have an account?</span>
              <Link
                to="/signIn"
                className="text-indigo-400 no-underline transition duration-300 ease-in cursor-pointer hover:text-blue-500 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
