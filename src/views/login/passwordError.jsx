import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function PasswordError(props){
const navigate=useNavigate()
const handleHome=(e)=>navigate('/')
const handleLogin=(e)=>navigate("/signIn")
return <>
  <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
  <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
    <div class="w-full">
      <div class="m-8 my-20 max-w-[400px] mx-auto">
        <div class="mb-8">
          <h1 class="mb-4 text-3xl font-bol">Sorry User</h1>
          <p class="text-gray-600">we  <b class="text-bold text-blue-500">recognize the user exist</b> but your password is incorrect either contact Admin to reset or retry password.</p>
        </div>
        <div class="space-y-4">
          <button  onClick={handleHome}  class="p-3 bg-blue-800 w-full rounded-xl text-white w-full font-semibold">Go to Home</button>
          <button  onClick={handleLogin} class="p-3 bg-slate-600 border  text-white rounded-xl w-full font-semibold">Retry password</button>
        </div>
      </div>
    </div>
  </div>
</div>
</>
}