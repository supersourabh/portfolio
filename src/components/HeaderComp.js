import React from "react";
import { Outlet } from "react-router-dom";

export default function HeaderComp() {
  return (
    <>
      <header>
        <nav className="bg-gray-600 h-auto rounded-xl shadow-md">
          <div className="h-32 w-full">
            <a href={ process.env.REACT_APP_URL } className="flex items-center justify-start pl-5 lg:pl-16 h-32 w-full overflow-hidden object-cover" style={{fontFamily: 'Shadows Into Light'}} >
              <img src={ require("../assets/skg_logo.png") } alt="logo" className="w-auto h-32"  />
              <div className="text-5xl font-extrabold text-white">
                { process.env.REACT_APP_COMPANY }
              </div>
            </a>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
