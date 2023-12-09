import React from "react";
import projects from "../../assets/data/projectData.json";

export default function ProjectsComp() {
  function truncate(data) {
    console.log(data.length);
    return parseInt(data.length) < 70 ? data : data.substring(0, 90)+"...";
  }
  return (
    <div className="w-full mt-5 lg:mt-10">
      <div className="text-2xl font-bold w-full"> Projects</div>
      <div className="w-full">
        <ul className="flex flex-wrap lg:justify-start justify-center">
          {projects.map((project) => (
            <li
              key={project.name}
              className="overflow-hidden m-2 lg:mr-10 w-72 border-[1px]"
            >
              <div className="w-full h-40 overflow-hidden align-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="flex w-full object-contain"
                />
              </div>
              <div className="p-4 pt-2 h-auto overflow-hidden">
                <div className="font-bold">{project.name}</div>
                {/* <TextTruncate line={3} text={project.discription} /> */}
                <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  {truncate(project.discription)}
                </p>
                <button
                  id="more"
                  className=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  More
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
