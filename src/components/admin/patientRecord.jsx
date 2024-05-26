import {Link } from 'react-router-dom'
export default function PatientRecord(props) {
  return (
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
            <p className="font-semibold">Patient. Abebe Alemu</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 text-sm">male</td>

      <td className="px-4 py-3 text-sm">22</td>

      <td className="px-4 py-3 text-sm">0922273046</td>
      
      <td className="px-4 py-3 text-sm">05-06-2015</td>
      <td className="px-4 py-3 text-sm">4:00 AM</td>
       <td>
      <div className="flex-shrink-0">
        <Link to="/adminDashbord/addAppointment"
          href="/"
          className="p-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-blue-700"
        >
         Assign Doctor
        </Link>
      </div></td>
      < td>
      <div className="flex-shrink-0">
        <a
          href="/"
          className="p-2 text-sm font-medium rounded-lg text-cyan-600 hover:bg-gray-100"
        >
          Detail
        </a>
    </div>
     </td>
    </tr>
  );
}
