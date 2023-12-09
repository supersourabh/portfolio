import React from "react";

export default function SkillCardComp(props) {
  const category = props.category;
  const skills = props.skills;
  const key = props.key;

  const color = (opacity = true) => {
    let colorString = "0123456789ABCDEF";
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += colorString[Math.floor(Math.random() * 16)];
    }
    return opacity ? colorCode + "55" : colorCode;
  };
  return (
    <ul
      className={`flex w-60 flex-wrap rounded-3xl lg:my-2 p-2 m-2 shadow-[inset_-20px_-12px_90px_${color(
        false
      )}56]`}
    >
      <li
        key={key}
        className={`w-full flex justify-center align-center text-xl font-semibold p-2 shadow rounded-xl`}
      >
        {category}
      </li>
      {skills.map((skill) => (
        <>
          <li
            className={`border-2 border-[${color()}] w-fit px-2 py-1 rounded-xl mx-1 my-2`}
          >
            {skill}
          </li>
        </>
      ))}
    </ul>
  );
}
