import React from 'react'
import { Link } from 'react-router-dom';
import { CiTimer } from "react-icons/ci";
import { RiUserSearchLine } from "react-icons/ri";
import logo from '../../Assets/Gaziantep_Gaziray_Line_Symbol.svg (1).png'
export default function SideBarDashboard() {
  return (
    <div className="fixed lg:w-[15%] smm:w-[40px] overflow-hidden bg-white h-[100vh] smm:h-[200vh] lg:px-2 py-4 ">
      <div>
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" className="w-10 smm:w-8" />
        </div>
        <ul className="smm:p-2 mt-5">
          <Link>
            <li className="flex gap-1 items-center  text-slate-700 font-semibold smm:mb-4" >
              <CiTimer size={20} />
              <p className="smm:hidden mt-2">Dashboard</p>
            </li>
          </Link>
          <Link to={'/dashboard/userdashboard'}>
            <li className="flex gap-1 items-center  text-slate-700 font-semibold">
          
              <RiUserSearchLine size={20} />
              <p className="smm:hidden mt-2">Users</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
