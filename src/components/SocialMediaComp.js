import React from "react";
import github from "../assets/social_media/github.svg";
import linkedin from "../assets/social_media/linkedin.svg";
import instagram from "../assets/social_media/instagram.svg";
import whatsapp from "../assets/social_media/whatsapp.svg";
import mail from "../assets/social_media/mail.svg";
import mobile from "../assets/social_media/mobile.svg";

export default function SocialMediaComp() {
  let shadow = { filter: `drop-shadow(0 0 1rem  #DAC8AE9f)` };
  let iconsData = [
    {
      name: "GitHub",
      link: process.env.REACT_APP_GITHUB_URL,
      icon: github,
    },
    {
      name: "LinkedIn",
      link: process.env.REACT_APP_LINKEDIN_URL,
      icon: linkedin,
    },
    {
      name: "Instagram",
      link: process.env.REACT_APP_INSTAGRAM_URL,
      icon: instagram,
    },
    {
      name: "Whatsapp",
      link: process.env.REACT_APP_WHATSAPP_URL,
      icon: whatsapp,
    },
    {
      name: "Mail",
      link: process.env.REACT_APP_MAIL_URL,
      icon: mail,
    },
    {
      name: "Mobile",
      link: process.env.REACT_APP_MOBILE_NUMBER,
      icon: mobile,
    },
  ];
  return (
    <section className="w-full lg:w-1/4 text-white flex-0.5 bg-gray-700 shadow-lg lg:mt-5 rounded-lg  p-2 h-max z-0">
      <ul className="text-lg font-semibold tracking-wide text-gray-300">
        <li
          title="section-left-header"
          className="flex items-center px-3 lg:px-5 py-5 text-2xl text-white"
        >
          Social Media
        </li>
        {iconsData.map((icon) => (
          <a
            href={icon.link}
            title="section-left-header"
            className="flex items-center justify-start py-4 w-full transition delay-5 ease-in-out hover:-translate-y-3"
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="w-10 mx-2 lg:mx-5"
              style={shadow}
            />
            <p className="px-3">{icon.name}</p>
          </a>
        ))}
      </ul>
    </section>
  );
}
