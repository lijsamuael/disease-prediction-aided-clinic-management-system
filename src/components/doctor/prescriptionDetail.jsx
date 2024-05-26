import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function PrescriptionDetail() {
    const testNames = useSelector((state) => state.testNames.testNames)
    const [testName, setTestName] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const testNamesFiltered = testNames.filter((testName) => testName.prescId == id)
        setTestName(testNamesFiltered)
    }, [])
   
    if (!testName) {
        return (<div>Loading</div>)
    }

    return (
        <>
            <div class=" ml-40 w-full p-4 overflow-x-hidden overflow-y-auto  md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-md max-h-full">
                    <div class=" border border-black flex flex-col align-center bg-black-300 rounded-lg shadow dark:bg-gray-700">
                        <div class="px-6 py-4  rounded-t dark:border-black">
                            <h3 class="text-base font-bold font-3xl text-black lg:text-xl dark:text-white">
                                Test and Results
                            </h3>
                        </div>
                        <div class="p-6">
                            <ul className="my-4 space-y-3">
                                {testName &&
                                    testName.map((test, index) => {
                                        return (
                                            <li key={index}>
                                                <div
                                                    href="#"
                                                    className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-300 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                                >
                                                    <span className="flex-1 ml-3 whitespace-nowrap">{test.testName}</span>
                                                    <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                                                        {test.value}
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <Link to="/doctor/prescription" data-modal-hide="bottom-right-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">cancel</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}