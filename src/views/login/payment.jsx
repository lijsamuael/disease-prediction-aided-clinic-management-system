import { Link,useLocation,useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {useState ,useEffect} from 'react'
export default function Payment(props) {
  
const location = useLocation();
const { firstName, lastName,phoneNumber,email} = location.state;
console.log(firstName,lastName,phoneNumber,email)
  useEffect(()=>{

  },[])
   
 const [id,setId]=useState(uuidv4())
  return (
    <div className="container flex flex-wrap justify-center max-w-3xl px-5 py-24 mx-auto mt-10 bg-white rounded-lg">
      <div className="flex-wrap items-center md:flex">
        <div className="mx-auto">
          {/* <img
            className="w-full h-full p-2 mx-auto mt-12 border rounded-lg md:mt-0"
            src="/images/pay.png"
            alt="step"
          /> */}
        </div>
        <div className="max-w-sm mt-8 md:mt-0 md:ml-10 md:w-2/3">
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                STEP 1
              </h2>
              <p className="leading-relaxed font-laonoto">
                Check your firstName,lastName and phone number are correct<br />
                {/* <b>And select this account number 1000297772493 </b> */}
              </p>
            </div>
          </div>
          <div className="relative flex pb-12">
            <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                STEP 2
              </h2>
              <p className="leading-relaxed font-laonoto">
                Choose your payment meathod Available from the list {"  "}
              </p>
            </div>
          </div>
          <div className="relative flex pb-12">
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                STEP 3
              </h2>
              <p className="leading-relaxed font-laonoto">
              Confirm payment if you have <b>100 ETB</b> 
              </p>
            </div>
          </div>
        </div>     
         <form class="container flex flex-wrap justify-center max-w-3xl px-5  mx-auto mt-10 bg-white rounded-lg" method="POST" action="https://api.chapa.co/v1/hosted/pay" >
          <input type="hidden" name="public_key" value="CHAPUBK_TEST-iamHtHkd02b8U9IVh6VCiTCze09vTQPa"/>
          <input type="hidden" name="tx_ref" value={id} />
          <input type="hidden" name="amount" value="100" />
          <input type="hidden" name="currency" value="ETB" />
          <input type="hidden" name="email" value={email}/>
          <input type="hidden" name="first_name" value={firstName} />
          <input type="hidden" name="last_name" value={lastName} />
          <input type="hidden" name="title" value="Let us do this" />
          <input type="hidden" name="description" value="Paying with Confidence with cha" />
          <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
          <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
          <input type="hidden" name="return_url" value="http://localhost:3000/paymentSuccess" />
          <input type="hidden" name="meta[title]" value="test" />
          <button type="submit"
           className="text-center w-full mx-[7%] block rounded-md border bg-blue-500  py-2 text-white outline-none"
            >Complete Payment
          </button>
      </form>    
      </div>
    </div>
  );
}
