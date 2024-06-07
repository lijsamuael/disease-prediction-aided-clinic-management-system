import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  setCurrentAdmin,
  setCurrentDoctor,
  setCurrentFinance,
  setCurrentLaboratorist,
  setCurrentPatient,
} from "../../redux/currentUser";
export default function SingIn() {
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate(); // Create a history object
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  // const currentuser = useSelector((state) => state.currentUser.currentUser);

  // const currentPatient = useSelector(
  //   (state) => state.currentPatient.currentPatient
  // );
  // const currentDoctor = useSelector(
  //   (state) => state.currentDoctor.currentDoctor
  // );
  // const currentLaboratorist = useSelector(
  //   (state) => state.currentLaboratorist.currentLaboratorist
  // );
  // const currentAdmin = useSelector((state) => state.currentAdmin.currentAdmin);
  // const currentFinance = useSelector(
  //   (state) => state.currentFinance.currentFinance
  // );

  useEffect(() => {
    // localStorage.setItem("labToken", null);
    // localStorage.setItem("adminToken", null);
    // localStorage.setItem("doctorToken", null);
    // localStorage.setItem("patientToken", null);
    // localStorage.setItem("fainanceToken", null);
    if (responseData) {
      dispatch(setCurrentUser(responseData.user));
      // console.log("the logged user id is",responseData.id)
      // console.log("the dispatched current user is ",currentuser)
    }
    if (responseData && responseData.userType === "Admin") {
      setUser("user");
      if (responseData.isLogIn) {
        navigate("/adminDashbord");
        localStorage.setItem("adminToken", responseData.token);
        dispatch(setCurrentAdmin(responseData.user));
      } else {
        console.log("Invalid username or password");
        setErrorMessage("Invalid username or password ");
      }
    } else if (responseData && responseData.userType === "Doctor") {
      setUser("user");
      if (responseData.isLogIn) {
        navigate("/doctor");
        localStorage.setItem("doctorToken", responseData.token);
        dispatch(setCurrentDoctor(responseData.user));
      } else {
        console.log("Invalid username or password");
        setErrorMessage("Invalid username or password ");
      }
    } else if (responseData && responseData.userType === "Finance") {
      setUser("user");
      if (responseData.isLogIn) {
        navigate("/finance");
        localStorage.setItem("financeToken", responseData.token);
        dispatch(setCurrentFinance(responseData.user));
      } else {
        console.log("Invalid username or password");
        setErrorMessage("Invalid username or password ");
      }
    } else if (responseData && responseData.userType === "Labratoriest") {
      setUser("user");
      if (responseData.isLogIn) {
        navigate("/lab");
        localStorage.setItem("labToken", responseData.token);
        dispatch(setCurrentLaboratorist(responseData.user));
      } else {
        console.log("Invalid username or password");
        setErrorMessage("Invalid username or password ");
      }
    } else if (responseData && responseData.userType === "Patient") {
      setUser("user");
      if (responseData.isLogIn) {
        navigate(`/patient/${responseData.id}`);
        localStorage.setItem("patientToken", responseData.token);
        dispatch(setCurrentPatient(responseData.user));
      } else {
        console.log("Invalid username or password");
        setErrorMessage("Invalid username or password ");
      }
    } else if (responseData && responseData.isLogIn != true) {
      setErrorMessage("Invalid username or password");
    }
  }, [responseData, navigate]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/authenticate/login",
        formData
      );
      console.log(`_________${response.data}`);
      console.log(response.data.user);
      setResponseData(response.data);
    } catch (error) {
      console.log("Invalid username or password");
      setErrorMessage("Invalid username or password ");
    }
  };
  return (
    <>
      <div
        className="w-full p-8 bg-white dark:bg-gray-800 md:flex md:items-center md:justify-center sm:w-auto md:h-full xl:w-2/5 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none"
        style={{ fontFamily: "Poltawski Nowy" }}
      >
        <div className="w-full max-w-md space-y-4">
          <div className="pt-8 text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white  lg:text-4xl">
              Welcome Back!
            </h2>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-300 text-semi-bold">
              Please sign in to your account
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="pb-8 space-y-6"
            method="POST"
          >
            {errorMessage && <p class="text-red-500 ">{errorMessage}</p>}

            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <label className="ml-3 text-sm font-bold tracking-wide text-gray-700 dark:text-gray-200">
                username
              </label>
              <input
                className="w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your username"
                // value={""}
                onChange={handleChange}
                name="username"
                value={formData.username}
              />
            </div>
            <div className="content-center mt-8">
              <label className="ml-3 text-sm font-bold dark:text-gray-200 tracking-wide text-gray-700">
                Password
              </label>
              <input
                className="content-center w-full px-4 py-2 text-base border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
                // value={""}
                onChange={handleChange}
                name="password"
                value={formData.password}
              />
            </div>
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
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
            </div> */}
              {/* <div className="text-sm">
              <Link to ="/signIn/forgetPassword" className="text-indigo-400 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div> */}
            </div>
            <div>
              <button
                onSubmit={handleSubmit}
                // to={`${username === "admin" ? "/adminDashbord" : username === "doctor" ? "/doctor" : username === "lab" ? "/lab" : "/patient"}
                // `}
                className="flex justify-center w-full p-4 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600"
              >
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center dark:text-gray-200 justify-center mt-10 text-center text-gray-500 text-md">
              <span>Don't have an account?</span>
              <Link
                to="/signIn/signUp"
                className="text-indigo-400 no-underline transition duration-300 ease-in cursor-pointer hover:text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
