import React from "react";
import ProfileAndNameComp from "./ProfileAndNameComp";
import ProjectsComp from "./ProjectsComp";
import SkillsComp from "./skills/SkillsComp";
import HobbiesComp from "./HobbiesComp";

export default function MainSectionComp() {
  return (
    <section className="w-full text-white flex my-2 lg:mt-5 lg:ml-5 rounded-lg px-5 h-max rounded-lg">
      <div className="w-full overflow-scroll">
        <ProfileAndNameComp />
        <SkillsComp />
        <ProjectsComp />
        <HobbiesComp />
      </div>
      <div></div>
    </section>
  );
}
