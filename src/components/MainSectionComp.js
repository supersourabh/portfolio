import React from "react";
import ProfileAndNameComp from "./ProfileAndNameComp";
import ProjectsComp from "./ProjectsComp";
import SkillsComp from "./skills/SkillsComp";
import HobbiesComp from "./HobbiesComp";
import CertificateComp from "./CertificateComp";

export default function MainSectionComp() {
  return (
    <section className="w-full text-white flex my-2 lg:mt-5 lg:ml-5 rounded-lg px-5 h-max rounded-lg">
      <div className="w-full overflow-scroll">
        <ProfileAndNameComp />
        <SkillsComp />
        <ProjectsComp />
        <HobbiesComp />
        <CertificateComp />
        {/* adding footer for in main section only for bette view */}
        <footer className="text-center mx-auto border-t-2 border-gray-500 pt-3 h-max p-1">
          <div>
            <span className="text-sm font-semibold">
              Created and Maintained By{" "}
            </span>
            <span className="font-bold rounded-lg p-1 bg-orange-500">
              {" "}
              {process.env.REACT_APP_COMPANY}
            </span>
          </div>
          <span className="text-xs  text-gray-500 ">
            {" "}
            v{process.env.REACT_APP_VERSION}
          </span>
        </footer>
      </div>
      <div></div>
    </section>
  );
}
