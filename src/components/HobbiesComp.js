import React from "react";
import hobbies from "../assets/data/hobbiesData.json";

export default function HobbiesComp() {
  return (
    <div>
      <div className="text-2xl font-bold w-full">Hobbies</div>
      <div>
        <ul className="flex justify-start p-2">
          {hobbies.map((hobbie, key) => (
            <li className="relative w-72 h-52 overflow-hidden">
              <div className="absolute flex justify-center items-center w-full h-full ">
                <p className=""> Name</p>
              </div>
              <img
                className="object-contain w-72 h-52 z-0 blur-sm transition ease-in-out delay-2 hover:blur-none origin-bottom hover:skew-y-0 "
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
