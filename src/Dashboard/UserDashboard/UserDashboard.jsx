import React from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";

export default function UserDashboard() {
  return (
    <div className="w-[95%] mx-auto mt-4 bg-white min-h-96 p-3">
      <div>
              <HeaderTable navigateTo={ '/dashboard/adduserdashboard' } name={ 'Add New' } title={ 'user Table'} />
      </div>

      <div class="relative overflow-x-auto mt-3 scrollbar">
        <table className="w-full text-sm  text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  even:bg-gray-50  border-b ">
              <td className="px-6 py-4">
                Ahmed
              </td>
              <td className="px-6 py-4">ahmed@gmail.com</td>
              <td className="px-6 py-4">01092166248</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="font-medium text-blue-600 ">delete</button>
                <button className="font-medium text-blue-600 ">Edit</button>
              </td>
                      </tr>
                      
          </tbody>
        </table>
      </div>
    </div>
  );
}
