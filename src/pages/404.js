import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation-404.json"

export default function NotFound() {

  return (
    <>
      <div className="flex flex-col w-100 items-center justify-center border-gray-300 p-5 text-4xl font-bold text-gray-500 tracking-wide ">
        <div className="w-52 h-52">
          <Lottie animationData={ animationData } loop autoPlay />
        </div>
        Not Found
      </div>
      <div className="flex item-center justify-center text-xs font-bold text-red-300 pt-3">
        <span className="text-gray-300">Powered by </span>{ " " }
        <span className="pl-2"> { process.env.REACT_APP_COMPANY } </span>
        <span className="text-gray-300 pl-2">
          v{ process.env.REACT_APP_VERSION }
        </span>
      </div>
    </>
  );
}
