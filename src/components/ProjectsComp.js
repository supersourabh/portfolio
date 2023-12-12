import React from "react";
import projects from "../assets/data/projectData.json";

export default function ProjectsComp() {
  function truncate(data) {
    console.log(data.length);
    return parseInt(data.length) < 100 ? data : data.substring(0, 100) + "...";
  }
  return (
    <div className="w-full mt-5 lg:mt-10">
      <div className="text-2xl font-bold w-full"> Projects</div>
      <div className="w-full">
        <ul className="flex flex-wrap lg:justify-start justify-center">
          {projects.map((project) => (
            <li
              key={project.name}
              className="overflow-hidden m-2 lg:mr-10 w-72 border-[1px] shadow hover:shadow-lg hover:shadow-gray-700 transition hover:scale-105 transform-gpu"
            >
              <div className="w-full h-40 overflow-hidden align-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="flex w-full object-contain"
                />
              </div>
              <div className="p-4 pt-2 h-auto overflow-hidden">
                <div
                  className={`${
                    project.name === "Working"
                      ? "text-cyan-500"
                      : "text-yellow-500"
                  } font-bold `}
                >
                  {project.name}
                  {project.name === "Working" ? (
                    <>
                      <span id="dot1" className="dots">.</span>
                      <span id="dot2" className="dots">.</span>
                      <span id="dot3" className="dots">.</span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <p
                  className="font-thin"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <span className="font-normal underline">Skills Used</span> :{" "}
                  {truncate(project.discription)}
                </p>
                <button
                  id="more"
                  onClick={() => window.open(project.repo)}
                  disabled={project.name === "Working" ? true : false}
                  className={`${
                    project.name !== "Working"
                      ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      : "bg-gray-500"
                  } mt-2 text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 `}
                >
                  Repo
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
