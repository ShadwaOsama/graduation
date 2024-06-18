import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HeaderTable( { navigateTo,name,title } ) {
    const navigate = useNavigate()
    return (
      <>
        <div className="flex justify-between items-center">
          <div>{title}</div>
          {navigateTo === "-1" ? (
            <button onClick={() => navigate(-1)}>{name}</button>
          ) : (
            <button onClick={() => navigate(`${navigateTo}`)}>{name}</button>
          )}
        </div>
        <div className="w-full h-[1px] mt-2 bg-slate-100"></div>
      </>
    );
}
