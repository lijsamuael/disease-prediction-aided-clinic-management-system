import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import './styles.css'
import SidebarComponent from '../../components/admin/sidebarComponent'
 import {useSelector} from 'react-redux'
export default function AdminDashbord(props){
  const patients = useSelector((state) => state.patients.quantity);
  const doctors = useSelector((state) => state.doctors.quantity);
  const appointments = useSelector((state) => state.appointments.quantity);
  const currentUser=useSelector((state)=>state.currentUser.currentUser);
  const prescriptions=useSelector((state)=>state.prescriptions.quantity);
 //this is unnessary code only used for changing the theme of the app
  const setup = () => {
    const getTheme = () => {
      if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
      }
      return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    const setTheme = (value) => {
      window.localStorage.setItem('dark', value)
    }
    return {
      loading: true,
      isDark: getTheme(),
      toggleTheme() {
        this.isDark = !this.isDark
        setTheme(this.isDark)
      },
    }
  }
 

  return ( 
       <>
        <div x-data="setup()" class="bg-black">
            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
              <div class="fixed w-full flex items-center justify-between h-14 text-white z-10">
                <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                <img class="rounded-full mr-2 w-10 h-10 relative object-cover" src="images/defaultProfile.jpg" alt=""/>

                 <div>
                    <p class="font-medium group-hover:text-indigo-400 leading-4">Administrator</p>
                    <span class="text-xs text-slate-400">{currentUser.username}</span>
                </div>
                </div>

     {/* <a href="#" class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                <div>
                    <img class="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt=""/>
                </div>
                <div>
                    <p class="font-medium group-hover:text-indigo-400 leading-4">Jim Smith</p>
                    <span class="text-xs text-slate-400">Pantazi LLC</span>
                </div>
            </a> */}
                <div class="flex justify-end items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                  {/* <div class="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                    <button class="outline-none focus:outline-none">
                      <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <input type="search" name="" id="" placeholder="Search" class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                  </div> */}
                  <ul class="flex items-center">
                    <li>
                      {/* <button
                        aria-hidden="true"
                        onCick={setup}
                        class="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                      >
                        <svg
                          x-show="isDark"
                          width="24"
                          height="24"
                          class="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke=""
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </button> */}
                    </li>
                   
                    <li>
                      <Link to="/adminDashbord/forgetPassword" class="flex items-center mr-4 hover:text-blue-100">
                        <span class="inline-flex mr-1">
                          {/* <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg> */}
                        </span>
                        ResetPassword
                      </Link>
                    </li>
                    <li>
                      <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                    </li>
                    <li>
                      <Link to="/" class="flex items-center mr-4 hover:text-blue-100">
                        <span class="inline-flex mr-1">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </span>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <SidebarComponent/>
              <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                  <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div class="text-right">
                      <p class="text-2xl">{doctors}</p>
                      <p>Doctors</p>
                    </div>
                  </div>
                  <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2">
                        </path>
                        <circle stroke-linecap="round" stroke-linejoin="round" cx="12" cy="7" r="4"></circle>  
                        </svg>
                    </div>
                    <div class="text-right">
                      <p class="text-2xl">{patients}</p>
                      <p>Patients</p>
                    </div>
                  </div>
               
                  <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                        
                {/* <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg> */}
 
                   <img src="/icons/appointment.jpg" alt="" class="w-8 h-8 rounded-full h-30 stroke-current bg-blue-500 text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"/>
                    </div>
                    <div class="text-right">
                      <p class="text-2xl">{appointments}</p>
                      <p>Appointments</p>
                    </div>
                  </div>
                  <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                    <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                    <img src="/icons/prescription.png" alt="" class="w-8 h-8 rounded-full h-30 stroke-current bg-blue-500 text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"/>
                    </div>
                    <div class="text-right">
                      <p class="text-2xl">{prescriptions}</p>
                      <p>Lab Orders</p>
                    </div>
                  </div>
                </div>
              <Outlet/>
            </div>

            </div>
          </div> 
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script> 
    </>
    
     );
    
    }
