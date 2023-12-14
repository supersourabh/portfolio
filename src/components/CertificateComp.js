import React from "react";
import certs from "../assets/data/certificateData.json";

export default function CertificateComp() {
  const color = (opacity = true) => {
    let colorString = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += colorString[Math.floor(Math.random() * 16)];
    }
    return opacity ? colorCode + "22" : colorCode;
  };
  return (
    <div>
      <div className="text-2xl font-bold w-full">Certificates</div>
      <div className="flex overflow-auto flex-wrap">
        {certs.map((cert, key) => (
          <div className="relative w-auto max-w-xs h-60 m-2 group overflow-hidden">
            <div className="flex w-full h-auto flex-col transition duration-500 group-hover:translate-y-full  origin-bottom z-10 bg-white">
              <img
                className="object-contain w-auto h-auto z-10 group-hover:z-10 bg-white"
                src={cert.certificate}
                alt={cert.name}
              />
            </div>
            <div className={` absolute top-0 flex flex-col bg-[${color(true)}] w-full h-full p-2 z-0`} >
            {/* <img
                className="object-contain w-full h-auto "
                src={cert.certificate}
                alt={cert.name}
              /> */}
              <strong className="text-2xl z-0">{cert.name}</strong>
              <strong className="text-lg text-gray-500 z-0">{cert.category}</strong>
              <strong className="text-md font-thin z-0">
                <span>Provider:</span>
                <span
                  className={`py-1 px-2 bg-[${color()}] rounded-full text-[${color}] font-semibold`}
                >
                  {cert.provider}
                </span>
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
