import React from "react";
import SkillCardComp from "./SkillCardComp";

export default function SkillsComp() {
  let skillsList = [
    { Frontend: process.env.REACT_APP_FRONTEND_SKILLS.split(",") },
    {
      "Backend and DB": process.env.REACT_APP_BACKEND_AND_DB_SKILLS.split(","),
    },
    {
      "DevOps and Cloud":
        process.env.REACT_APP_DEVOPS_AND_CLOUD_SKILLS.split(","),
    },
    {
      Others: process.env.REACT_APP_OTHERS_SKILLS.split(","),
    },
  ];
  console.log(skillsList);
  return (
    <div title="skills" className="p-2 ">
      <div className="font-bold text-2xl mt-4 p-2">My Skills</div>
      <div className="flex justify-center lg:justify-start items-end w-full flex-wrap lg:border-b-2">
        {skillsList.map((category, index) => (
          <SkillCardComp
            key={index}
            category={Object.keys(category)[0]}
            skills={Object.values(category)[0]}
          />
        ))}
      </div>
    </div>
  );
}
