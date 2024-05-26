import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../../components/icons/login";
import Landing from "../../components/landing";

export default function Home() {
  // const [model, setModel] = useState();

  // useEffect(() => {
  //   async function loadModel() {
  //     try {
  //       // Load the model from your directory
  //       const loadedModel = await tf.loadLayersModel(
  //         "file://home/kali/Documents/Devssinia/MediConnect/frontend/public/models/model.json"
  //       );
  //       setModel(loadedModel);
  //       console.log("Model loaded successfully");
  //     } catch (error) {
  //       console.error("Error loading model:", error);
  //     }
  //   }

  //   loadModel();
  // }, []);

  async function loadModel() {
    console.log("loading a model");

    const model = await window.tflite.loadTFLiteModel(
      "file://home/kali/Documents/Devssinia/MediConnect/frontend/public/models/model.json"
    );
    console.log("model loaded sucessfully");
  }

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div
      className="overflow-x-hidden bg-fixed bg-cover"
      //   style={{ backgroundImage: "url(/images/bg3.png)" }}
    >
      <nav className="fixed z-30 w-screen px-4 py-4 bg-white border-gray-200 shadow-lg lg:px-6 dark:bg-gray-800 bg-white/95 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
          <a href="/" className="flex items-center">
            <img
              src="/icons/logo.png"
              className="mr-3 rounded-full-6 h-9"
              alt="Logo"
            />
            <span
              className="self-center text-xl font-bold tracking-widest text-gray-500 whitespace-nowrap dark:text-white"
              style={{ fontFamily: "Righteous" }}
            >
              KIDANE MIHRET CLINIC
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Link
              to="/signIn"
              className="flex w-32  items-center justify-between gap-x-2 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <p style={{ fontFamily: "Righteous" }}>Login</p>
              <LoginIcon />
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Landing />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto overflow-x-hidden lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-wider md:text-5xl xl:text-6xl dark:text-white"
              style={{ fontFamily: "Righteous" }}
            >
              Take care of your body and it will take care of you.
            </h1>
            <p
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
              style={{ fontFamily: "Righteous" }}
            >
              Take care of your body and your body will take care of you. In
              addition to that we will provide you a standard check in your
              health.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white duration-700 bg-blue-700 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get Help
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 duration-700 border border-gray-300 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Report for Emergency
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/5.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div
          className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16"
          style={{ fontFamily: "Righteous" }}
        >
          <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-widest text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
            Our specialized Services
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a
              href="/"
              className="flex items-center justify-center w-16 duration-700 hover:scale-105 gap-x-2"
            >
              <img src="/icons/heart.svg" alt="" />
              <p className="w-full text-2xl">Heart</p>
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-16 duration-700 hover:scale-105 gap-x-2"
            >
              <img src="/icons/kidney.svg" alt="" />
              <p className="w-full text-2xl">Kindney</p>
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-16 duration-700 hover:scale-105 gap-x-2"
            >
              <img src="/icons/eye.svg" alt="" />
              <p className="w-full text-2xl">Eye</p>
            </a>

            <a
              href="/"
              className="flex items-center justify-center w-16 duration-700 hover:scale-105 gap-x-2"
            >
              <img src="/icons/teeth.svg" alt="" />
              <p className="w-full text-2xl">Teeth</p>
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-16 duration-700 hover:scale-105 gap-x-2"
            >
              <img src="/icons/sport.svg" alt="" />
              <p className="w-full text-2xl">Fitness</p>
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-16 duration-700 hover:scale-105 gap-x-2"
            >
              <img src="/icons/blood.svg" alt="" />
              <p className="w-full text-2xl">Blood</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="object-cover w-full duration-700 rounded-lg h-96 hover:scale-105 hover:shadow-lg hover:shadow-gray-600"
              src="/images/doc1.jpg"
              alt="office content 1"
            />
            <img
              className="w-full mt-4 duration-700 rounded-lg lg:mt-10 hover:scale-105 hover:shadow-lg hover:shadow-gray-600"
              src="/images/doc2.jpg"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Experienced and Specialized Doctors
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Over <span className="font-extrabold">300</span> Successful
              Surgeries Performed Worldwide
            </h2>
            <p className="mb-4 font-light">
              The center is equipped with the latest medical technologies and
              equipment, enabling the staff to diagnose and treat a wide range
              of medical conditions and perform complex surgeries. Services
              offered at KidaneMihret Special Medical and Surgical Center
              include general medicine, cardiology, pediatrics, gynecology,
              orthopedics, neurology, dermatology, ophthalmology, and dentistry,
              among others.
            </p>
            <p className="mb-4 font-medium">
              KidaneMihret Special Medical and Surgical Center is dedicated to
              providing high-quality, personalized care to their patients. With
              their team of skilled medical professionals and state-of-the-art
              equipment, patients can feel confident in the care they receive at
              the clinic.
            </p>
          </div>
        </div>
      </section>
      <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div className="mb-6 md:mb-0">
          <a href="/" className="flex items-center">
            <img src="/icons/logo.png" className="h-8 mr-3" alt="Kidane" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kidane Mihret Special Medical and surgical Center
            </span>
          </a>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-1  gap-8 sm:gap-6 md:grid-cols-4  items-center  mt-20 sm:grid-cols-4">
              <div className="space-y-2 text-sm">
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contacts
                </p>
                <div className="flex">
                  <p className="mr-1 text-gray-600">
                    <b>Phone:</b>
                  </p>
                  <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    +251-932944344
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-600">
                    <b>Email:</b>
                  </p>
                  <a
                    href="mailto:info@lorem.mail"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-black hover:text-deep-purple-800"
                  >
                    kidanemihret@gmail.com
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-gray-600">
                    <b>Address:</b>
                  </p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Our address"
                    title="Our address"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Bahirdar
                  </a>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Medical professionals
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Medications and supplies
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Health education materials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/" className="">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/" className="mb-2 ">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:underline">
                Kidane Mihret Clinic
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}
