import React from "react";

export default function ProjectsComp() {
  let projects = [
    {
      name: "Ecommerce",
      discription:
        "lorem25mvklsdv lksvsdvsv sklvskldvs kvlsdmvs dvlksmvklsd vsklvskdklvmsdkl dskl sk skldm s mskl ",
    },
    {
      name: "Pincode Finder",
      discription:
        "lorem25mvklsdv lksvsdvsv sklvskldvs kvlsdmvs dvlksmvklsd vsklvskdklvmsdkl dskl sk skldm s mskl ",
    },
    {
      name: "Money management",
      discription:
        "lorem25mvklsdv lksvsdvsv sklvskldvs kvlsdmvs dvlksmvklsd vsklvskdklvmsdkl dskl sk skldm s mskl ",
    },
    {
      name: "Outlet slot booking",
      discription:
        "lorem25mvklsdv lksvsdvsv sklvskldvs kvlsdmvs dvlksmvklsd vsklvskdklvmsdkl dskl sk skldm s mskl ",
    },
    {
      name: "Employees task management",
      discription:
        "lorem25mvklsdv lksvsdvsv sklvskldvs kvlsdmvs dvlksmvklsd vsklvskdklvmsdkl dskl sk skldm s mskl ",
    },
  ];
  return (
    <div className="">
      <div className="text-2xl font-bold"> Projects</div>
      <div className="flex flex-wrap">
        <ul className="">
          {projects.map((project) => (
            <li>
              <div>
                <img src={require("../../assets/test.jpg")} alt="" />
              </div>
              <div>
                <div>{project.name}</div>
                <p>{project.discription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
