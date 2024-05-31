import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addPatient } from "../../redux/patientSlice";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  age: Yup.number().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  state: Yup.string().required("State is required"),
  wereda: Yup.string().required("City/Wereda is required"),
  kebele: Yup.string().required("Kebele is required"),
  contact: Yup.string()
    .required("Phone number is required")
    .test("phone-number", "Phone number must start with '09'", (value) => {
      if (!value) return true; // Allow empty value to be handled by the 'required' validation
      return value.startsWith("09");
    })
    .test(
      "phone-number-length",
      "Phone number must be exactly 10 characters long",
      (value) => {
        if (!value) return true; // Allow empty value to be handled by the 'required' validation
        return value.length === 10;
      }
    ),
});

export default function SingUp() {
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate(); // Create a history object
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const initialValues = {
    id: v4(),
    firstName: "",
    lastName: "",
    age: "",
    description: "",
    photo:
      "https://w7.pngwing.com/pngs/328/335/png-transparent-icon-user-male-avatar-business-person-profile.png",
    gender: "Male",
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
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = formik.values;
    console.log("I will dispatch", data);
    try {
      dispatch(addPatient(data));
      const firstName = data.firstName;
      const lastName = data.lastName;
      const phoneNumber = data.contact;
      const email = data.email;
      Swal.fire("Profile Created!", "success");

      navigate("/signIn/payment", {
        state: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
        },
      });
    } catch (error) {
      Swal.fire("Failed to creat Profile!", `Please try again.`, "error");

      console.error(error);
    }
  };

  useEffect(() => {
    console.log("formik values are", formik.values);
    // console.log(initialValues);
  }, [initialValues]);

  return (
    <div
      className="w-full p-8 bg-white dark:bg-gray-800 md:flex md:items-center md:justify-center sm:w-auto md:h-full xl:w-2/5 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none"
      style={{ fontFamily: "Poltawski Nowy" }}
    >
      <div className="w-full max-w-md space-y-4 ">
        <div className="pt-8 text-center">
          <h2 className="mt-6 text-xl font-semi-bold text-gray-900 dark:text-white lg:text-4xl">
            Welcome to MediConnect Patient Registration Form
          </h2>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-100">
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
              <label className=" text-sm font-bold tracking-wide text-gray-700  dark:text-white">
                First name
              </label>
              <input
                className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                  formik.errors.firstName && formik.touched.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-indigo-500`}
                type="text"
                placeholder="Enter your firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <div className="text-red-500">{formik.errors.firstName}</div>
              )}
            </div>
            <div className="relative">
              <label className="text-sm font-bold tracking-wide text-gray-700  dark:text-white">
                Last Name
              </label>
              <input
                className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                  formik.errors.lastName && formik.touched.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-indigo-500`}
                type="text"
                placeholder="Enter your lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <div className="text-red-500">{formik.errors.lastName}</div>
              )}
            </div>
            <div className="flex justify-between pr-8">
              <div className="w-1/2  mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700  dark:text-white text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Gender
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block appearance-none w-full bg-white border-2 border-gray-300  text-gray-500   py-[10.5px] px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="grid-state"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700  dark:text-white">
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
                  className="block uppercase tracking-wide text-gray-700  dark:text-white text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Age
                </label>
                <input
                  className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                    formik.errors.age && formik.touched.age
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:border-indigo-500`}
                  type="text"
                  placeholder="Enter your age"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.age && formik.touched.age && (
                  <div className="text-red-500">{formik.errors.age}</div>
                )}
              </div>
            </div>

            <div className="relative">
              <label className=" text-sm font-bold tracking-wide text-gray-700  dark:text-white">
                username
              </label>
              <input
                className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                  formik.errors.username && formik.touched.username
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-indigo-500`}
                type="text"
                placeholder="Enter username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-red-500">{formik.errors.username}</div>
              )}
            </div>
            <div className="content-center mt-8">
              <label className=" text-sm font-bold tracking-wide text-gray-700  dark:text-white">
                Password
              </label>
              <input
                className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-indigo-500`}
                type="text"
                placeholder="Enter your password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
            <div className="content-center mt-8">
              <label className=" text-sm font-bold tracking-wide text-gray-700  dark:text-white">
                Email
              </label>
              <input
                className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-indigo-500`}
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>

            <div className="content-center mt-8">
              <label className=" text-sm font-bold tracking-wide text-gray-700  dark:text-white">
                Phone Number
              </label>
              <input
                className={`w-full px-4 py-2 text-base border-2 bg-white  ${
                  formik.errors.contact && formik.touched.contact
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-indigo-500`}
                type="text"
                placeholder="Enter your phonenumber"
                name="contact"
                value={formik.values.contact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.contact && formik.touched.contact && (
                <div className="text-red-500">{formik.errors.contact}</div>
              )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Region
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block appearance-none w-full border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option value="Amhara">Amhara</option>
                    <option value="Tigray">Tigray</option>
                    <option value="Oromia">Oromia</option>
                    <option value="SNNPR">SNNPR</option>
                    <option value="Somali">Somali</option>
                    <option value="Benshangul-Gumuz">Benshangul-Gumuz</option>
                    <option value="Afar">Afar</option>
                    <option value="Harer">Harer</option>
                    <option value="Gambella">Gambella</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Dire Dawa">Dire Dawa</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {formik.errors.state && formik.touched.state && (
                  <div className="text-red-500">{formik.errors.state}</div>
                )}
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700  dark:text-white text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City/Wereda
                </label>
                <input
                  className={`w-full px-4 py-2 text-base border-2 bg-white text-gray-500  ${
                    formik.errors.wereda && formik.touched.wereda
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:border-indigo-500`}
                  type="text"
                  placeholder="city/wereda"
                  name="wereda"
                  value={formik.values.wereda}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.wereda && formik.touched.wereda && (
                  <div className="text-red-500">{formik.errors.wereda}</div>
                )}
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700  dark:text-white text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  kebele
                </label>
                <input
                  className={`w-full px-4 py-2 text-base border-2 bg-white text-gray-500 ${
                    formik.errors.kebele && formik.touched.kebele
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:border-indigo-500`}
                  type="text"
                  placeholder="Enter your kebele"
                  name="kebele"
                  value={formik.values.kebele}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.kebele && formik.touched.kebele && (
                  <div className="text-red-500">{formik.errors.kebele}</div>
                )}
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
