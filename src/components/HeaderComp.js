import React from "react";
import { Outlet } from "react-router-dom";

export default function HeaderComp() {
  return (
    <>
      <header className="sticky top-0 backdrop-blur z-10">
        <nav className=" h-auto rounded-xl">
          <div className="h-28 w-full">
            <a href="/" className="flex items-center justify-start pl-5 lg:pl-16 h-28 w-full overflow-hidden object-cover" style={{fontFamily: 'Shadows Into Light'}} >
              <img src={ require("../assets/skg_logo.png") } alt="logo" className="w-auto h-28"  />
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
