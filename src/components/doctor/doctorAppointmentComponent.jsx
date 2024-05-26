import React from 'react'
export default function DoctorAppointmentComponent(props){
 return <>
 <div class="mt-4 mx-4">
        <div class="flex flex-col items-end mb-10">      
          <form class="flex w-full items-center">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search patients by thire name and card number " required />

            </div>
            <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
          </form>
          <div class="w-full  rounded-lg shadow-xs">

            <div class="w-full   overflow-visible">


              <table class="w-full sm:w-full">
                <thead>
                  <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-4 py-3">Patient Full Name</th>
                    <th class="px-4 py-3">Gender</th>
                    <th class="px-4 py-3">Card Number</th>
                    <th class="px-4 py-3">Contact</th>
                    <th class="px-4 py-3">Date</th>
                    <th class="px-4 py-4">Actions</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold">Abebe Alemu</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 text-sm">male</td>
      <td className="px-4 py-3 text-sm">T6995</td>

      <td className="px-4 py-3 text-sm">0921050510z</td>

      <td className="px-4 py-3 text-sm">05-06-2015</td>

      <td className="px-2 py-3">
        <div className="inline-flex items-center space-x-3">
          
        
        <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Prescribe
            </a>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-700"
            >
             cancel
            </a>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
            >
              Detail
            </a>
          </div>
        </div>
      </td>
    </tr> 

    <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold">Abebe Alemu</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 text-sm">male</td>
      <td className="px-4 py-3 text-sm">T6995</td>

      <td className="px-4 py-3 text-sm">0921050510z</td>

      <td className="px-4 py-3 text-sm">05-06-2015</td>

      <td className="px-2 py-3">
        <div className="inline-flex items-center space-x-3">
          
        
        <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Prescribe
            </a>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-700"
            >
             cancel
            </a>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
            >
              Detail
            </a>
          </div>
        </div>
      </td>
    </tr>
    
    <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold">Abebe Alemu</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 text-sm">male</td>
      <td className="px-4 py-3 text-sm">T6995</td>

      <td className="px-4 py-3 text-sm">0921050510z</td>

      <td className="px-4 py-3 text-sm">05-06-2015</td>

      <td className="px-2 py-3">
        <div className="inline-flex items-center space-x-3">
          
        
        <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Prescribe
            </a>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-700"
            >
             cancel
            </a>
          </div>
          
          <div className="flex-shrink-0">
            <a
              href="/"
              className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
            >
              Detail
            </a>
          </div>
        </div>
      </td>
    </tr>



                  
                </tbody>
              </table>
            </div>
            <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
              <span class="col-span-2"></span>
              {/* <!-- Pagination --> */}
              <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                  <ul class="inline-flex items-center">
                    <li>
                      <button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                        <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                    </li>
                    <li>
                      <span class="px-3 py-1">...</span>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
          </div>

        </div>
      </div>

 </>

}