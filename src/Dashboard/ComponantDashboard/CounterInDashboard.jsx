import React from 'react'
import ItemCounterInDashboard from './ItemCounterInDashboard'

export default function CounterInDashboard() {
  return (
    <div className="w-[95%]  mx-auto  mt-3">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
        <ItemCounterInDashboard
          name={"user"}
          counter={30}
          width={"70%"}
          color={"bg-blue-400"}
        />
        <ItemCounterInDashboard
          name={"product"}
          counter={40}
          width={"50%"}
          color={"bg-green-400"}
        />
        <ItemCounterInDashboard
          name={"category"}
          counter={50}
          width={"30%"}
          color={"bg-yellow-400"}
        />
        <ItemCounterInDashboard
          name={"orders"}
          counter={60}
          width={"90%"}
          color={"bg-red-400"}
        />
      </div>
    </div>
  );
}
