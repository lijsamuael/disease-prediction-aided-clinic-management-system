import React from "react";
export default function DiseaseComponent(props) {
  return (
    <tr className="text-gray-500">
      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
        HIV/AIDS
      </th>
      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
        35
      </td>
      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
        <div className="flex items-center">
          <span className="mr-2 text-xs font-medium">30%</span>
          <div className="relative w-full">
            <div className="w-full bg-gray-200 rounded-sm h-2">
              <div
                className="bg-cyan-600 h-2 rounded-sm"
                style={{ width: "30" }}
              ></div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
