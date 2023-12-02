import React from "react";
import { FaAt } from "react-icons/fa";

export default function ProfileAndNameComp() {
  return (
    <div className="w-full h-52 flex flex-col lg:flex-row justify-center rounded-2xl shadow-lg">
      <div className="flex items-center w-auto lg:w-2/3">
        <img
          src={process.env.REACT_APP_PROFILE}
          alt="profile"
          className="w-36 h-36 object-cover rounded-full border-4 border-white p-1"
        />
        <div className="flex flex-col justify-center px-5 w-1/2">
          <p className=" text-4xl"> {process.env.REACT_APP_NAME}</p>
          <p className="flex items-center justify-start my-1">
            {process.env.REACT_APP_CURRENT_ROLE } @
            <span className="rounded-lg px-2 py-auto mx-1 bg-gray-500">
              {process.env.REACT_APP_CURRENT_COMPANY}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-auto">
        <a
          href={process.env.REACT_APP_MAIL_URL}
          className=" flex bg-yellow-900 p-2 rounded-lg text-center"
        >
          <span className="text-center py-1 px-2 ">
            <FaAt color="yellow" />
          </span>
          Contact on my Mail
        </a>
      </div>
    </div>
  );
}
