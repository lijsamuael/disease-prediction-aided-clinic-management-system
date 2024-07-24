import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { sendBackPrescription } from "../../redux/prescriptionSlice";
import { updateTestNames } from "../../redux/testNameSlice";
export default function LabResult() {
  let { id } = useParams();
  const navigate = useNavigate();
  const prescriptions = useSelector(
    (state) => state.prescriptions.prescriptions
  );
  const testNames = useSelector((state) => state.testNames.testNames);

  console.log("prescriptions are...", prescriptions);
  const dispatch = useDispatch();
  const [confirmDate, setConfirmDate] = useState();
  //this returns single preescription based on passed id
  const data = prescriptions.find((item) => item.id === id);
  const [prscData, setPrscData] = useState(data);
  const [filteredTestNames, setFilteredTestNames] = useState([]);

  function updateConfirmDate(time) {
    setPrscData((prevState) => ({
      ...prevState, // Keep the previous state values
      confirmDate: time,
      status: "confirmed",
    }));
  }
  // useEffect(()=>{
  //   const  filtered=testNames.filter((testName)=>{
  //     if(testName.prescId===id){
  //       return testName
  //     }
  //  },
  //  )
  //  setFilteredTestNames(filtered)

  // },[testNames]);
  useEffect(() => {
    const filtered = testNames.filter((testName) => testName.prescId === id);
    setFilteredTestNames(filtered);
  }, [testNames, id]);

  const handleChangeTestName = (value, index) => {
    setFilteredTestNames((prevState) => {
      const newState = [...prevState];
      const updatedItem = { ...newState[index], value: value };
      newState[index] = updatedItem;
      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send back test results!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(sendBackPrescription(prscData));
        filteredTestNames.forEach((test) => {
          dispatch(updateTestNames(test));
        });
      }
    });
    navigate("/lab");
  };
  useEffect(() => {
    console.log(prscData);
    // console.log(testResults);
  }, [prscData]);

  return (
    <>
      <div
        key={1}
        className="flex items-start justify-end w-full h-full overflow-x-hidden bg-white dark:bg-gray-700  text-secondary-dark4 gap-x-4"
      >
        <div className="flex flex-col  dark:bg-gray-800 justify-between overflow-y-auto top-0  overflow-x-hidden rounded-lg mx-auto my-8  bg-white border-2 dark:border-0 border-gray-400 h-full  space-y-4">
          <div className="flex gap-16 px-4 py-8 text-white bg-blue-500 dark:bg-gray-800">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">MediConnect</h1>
              <h1 className="flex items-center justify-center mb-10 font-mono text-xl font-bold text-center">
                Fill Laboratory test results and send back to a doctor
              </h1>
            </div>
            <img className="w-24 h-24" src="/icons/logo1.png" alt="" />
          </div>
          <div className="w-full px-6 pb-6">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-blue-500 uppercase "
              for="grid-zip"
            >
              Test Description
            </label>
            <p
              className="flex items-start w-full h-full px-4 py-3 leading-tight text-gray-500 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Write a short description and background about the patient."
            >
              {prscData.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-blue-500 uppercase"
                for="grid-last-name"
              >
                Issued Date
              </label>
              <p className="block w-full px-4 py-3 leading-tight text-gray-500 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                {prscData.issueDate}
              </p>
            </div>
          </div>
          <form className="w-full py-10 mx-2 mt-10 ">
            <div className="w-full px-6">
              <h3 className="mb-4 text-sm font-bold text-blue-500 dark:text-white">
                Test Results
              </h3>
              <ul className="grid w-full grid-cols-1 gap-4 text-sm font-medium text-gray-900 bg-white sm:grid-cols-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                {filteredTestNames &&
                  filteredTestNames.map((test, index) => (
                    <li
                      key={index}
                      className="grid w-full grid-cols-2 gap-4 rounded-t-lg dark:border-gray-800"
                    >
                      {/* {test.map((tst, index) => ( */}
                      <div
                        key={index}
                        className="flex items-center px-2 pl-3 border border-gray-300"
                      >
                        <label
                          htmlFor={`test-${index}`}
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {test.testName}
                        </label>
                        <input
                          type="text"
                          onChange={(e) =>
                            handleChangeTestName(e.target.value, index)
                          }
                          className="w-16 h-8 text-blue-600 dark:text-gray-100 p-2 bg-gray-100 border border-gray-200 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                      </div>
                      {/* ))} */}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-64 px-6 pt-8">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-blue-500 uppercase"
                for="grid-last-name"
              >
                Confirmation Date
              </label>
              <input
                className="block dark:bg-gray-800 w-full px-4 py-3 leading-tight text-blue-500 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                placeholder="fill date in E.C"
                value={confirmDate}
                onChange={(e) => updateConfirmDate(e.target.value)}
              />
            </div>

            <div className="flex w-full justify-between px-[4%] gap-16">
              <button
                // onClick={handleClose}
                type=""
                className="px-10 py-2 mt-5 font-bold text-white transition-colors bg-red-500 rounded shadow focus:outline-none hover:bg-red-700"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                type=""
                className="px-10 py-2 mt-5 font-bold text-white transition-colors rounded shadow bg-primary focus:outline-none hover:bg-blue-700"
              >
                Send Lab Result
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
