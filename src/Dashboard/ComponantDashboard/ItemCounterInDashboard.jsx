import React from "react";

export default function ItemCounterInDashboard({ name, counter, width, color }) {
  return (
    <div className="bg-white px-3 py-3 pb-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-slate-500">{counter}</p>
      </div>
      <div>
        <div class="w-full bg-gray-200 rounded-md h-1.5 mt-3">
          <div
                      className={ `${color} h-1.5 rounded-md` }
            style={{ width: `${width}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
