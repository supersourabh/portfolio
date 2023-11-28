import React from "react";

export default function NotFound() {
  console.log(process.env);
  return (
    <>
      <div className="flex w-100 item-center justify-center border-b-2 border-gray-300 p-5 text-xl font-bold text-gray-500 tracking-wide">
        404 Not Found
      </div>
      <div className="flex item-center justify-center text-xs font-bold text-red-300 pt-3">
        <span className="text-gray-300">Powered by </span>{" "}
        <span className="pl-2"> {process.env.REACT_APP_COMPANY} </span>
        <span className="text-gray-300 pl-2">
          v{process.env.REACT_APP_VERSION}
        </span>
      </div>
    </>
  );
}
