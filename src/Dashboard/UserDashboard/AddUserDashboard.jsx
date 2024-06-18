import React from "react";
import HeaderTable from "../ComponantDashboard/HeaderTable";

export default function AddUserDashboard() {
  return (
    <div className="w-[95%] lg:max-w-lg mx-auto mt-4 bg-white min-h-96 p-3">
      <div>
        <HeaderTable
          navigateTo={"-1"}
          name={"back"}
          title={"Register"}
        />
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">password</label>
          <input
            type="password"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">confirmPassword</label>
          <input
            type="password"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="confirmPassword"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">phone</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="phone"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">postal Code</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="postal Code"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">role</label>
          <select className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]">
            <option value="user">user</option>
            <option value="admin">admin</option>
            <option value="admin">seller</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">steet</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="street"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">department</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="department"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">zip</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="zip"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">city</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="city"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">building</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="building"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">landmark</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="landmark"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">country</label>
          <input
            type="text"
            className="border border-slate-800 outline-none caret-slate-400 rounded-md py-1 px-2 placeholder:text-[14px]"
            placeholder="country"
          />
              </div>
              <div>
                  <button className="bg-buttonDashboard w-full mt-3 rounded-md p-1 duration-150 transition-all text-white font-semibold hover:bg-purple-700">Register</button>
              </div>
      </div>
    </div>
  );
}
