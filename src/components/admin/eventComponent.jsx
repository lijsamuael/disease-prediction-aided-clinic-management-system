import React from "react";
export default function EventComponent(props) {
  return (
    <tr className="bg-gray-50">
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
        Payment refund to <span className="font-semibold">#00910</span>
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
        Apr 23 ,2021
      </td>
    </tr>
  );
}
