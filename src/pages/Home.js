import React from "react";
import SocialMediaComp from "../components/SocialMediaComp";
import MainSectionComp from "../components/MainSectionComp";

export default function Home() {
  return (
    <div className="relative flex flex-col lg:flex-row my-2 lg:m-0">
      <SocialMediaComp />
      <MainSectionComp />
    </div>
  );
}
