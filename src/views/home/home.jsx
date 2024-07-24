import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../../components/icons/login";
import Landing from "../../components/landing";
import { diseaseLabels } from "../../constants/disease";
import { symptoms } from "../../constants/symptoms";
import Chatbot from "../../components/chatbot";
import NavBar from "../../components/navbar";
import HomeLanding from "../../components/homelanding";
import HomeServices from "../../components/homeServices";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div
      className="overflow-x-hidden bg-fixed bg-cover bg-white dark:bg-gray-900"
      // style={{ fontFamily: "Righteous" }}
    >
      <div
        className=""
        style={{
          backgroundImage: "url(/svgs/banner-shape.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      >
        <NavBar />
        <HomeLanding />
        <Chatbot />
      </div>

      <div>
        <HomeServices />
      </div>

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
              offered at MediConnect Special Medical and Surgical Center include
              general medicine, cardiology, pediatrics, gynecology, orthopedics,
              neurology, dermatology, ophthalmology, and dentistry, among
              others.
            </p>
            <p className="mb-4 font-medium">
              MediConnect Special Medical and Surgical Center is dedicated to
              providing high-quality, personalized care to their patients. With
              their team of skilled medical professionals and state-of-the-art
              equipment, patients can feel confident in the care they receive at
              the clinic.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}
