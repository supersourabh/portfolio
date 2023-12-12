import React from "react";
import hobbies from "../assets/data/hobbiesData.json";

export default function HobbiesComp() {
  return (
    <div className="py-5">
      <div className="text-2xl font-bold w-full">Hobbies</div>
      <div>
        <ul className="flex flex-wrap w-full justify-start p-2 ">
          {hobbies.map((hobbie, key) => (
            <li className="group relative w-auto h-48 m-2 lg:mr-6 overflow-hidden">
              <div className="absolute flex justify-center items-center w-full h-full p-5 t">
                <p className="text-xl text-white z-10 font-bold group-hover:translate-y-14 ransition duration-300 ease-in-out group-hover:text-gray-400">{hobbie.name}</p>
              </div>
              <img
                className="object-contain w-auto h-48 z-0 blur-[3px] transition ease-in-out duration-500 hover:blur-none origin-bottom hover:skew-y-0 "
                src={hobbie.image}
                alt={hobbie.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
