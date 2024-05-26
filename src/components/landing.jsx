import React from "react";
export default function Landing() {
  return (
    <section className="relative bg-blueGray-50 ">
      <div className="relative  pb-32 flex content-center items-center justify-center min-h-[80vh] pt-32 ">
        <div
          className="absolute top-0 w-full h-screen bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url(/images/bg3.png)",
            fontFamily: "Righteous",
          }}
        >
         <span
            id="blackOverlay"
            className="absolute w-full h-full bg-blue-600 opacity-60"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
              <div
                className="pr-12"
                style={{
                  fontFamily: "Righteous",
                }}
              >
                <h1 className="text-5xl font-semibold text-white">
                  Welcome to our clinic managment system.
                </h1>
                <p className="mt-4 text-lg text-white">
                  Take care of your body and your body will take care of you. In
                  addition to that we will provide you a standard check in your
                  health.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 -mt-24 bg-blueGray-200">
        <div className="container px-4 mx-auto ">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pt-6 text-center duration-700 lg:pt-12 md:w-4/12 hover:scale-105">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-red-400 rounded-full shadow-lg">
                    <img src="/icons/patient.svg" alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Petient care</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 text-center duration-700 md:w-4/12 hover:scale-105">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white bg-blue-400 rounded-full shadow-lg">
                    <img src="/icons/doctor.svg" alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Easy Appointment</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 pt-6 text-center duration-700 md:w-4/12 hover:scale-105">
              <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-white rounded-full shadow-lg bg-emerald-400">
                    <img src="/icons/admin.svg" alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Medical support</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
