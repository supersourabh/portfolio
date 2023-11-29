import React from "react";
import github from "../assets/social_media/github.svg"
import linkedin from "../assets/social_media/linkedin.svg"
import instagram from "../assets/social_media/instagram.svg"
import whatsapp from "../assets/social_media/whatsapp.svg"
import mail from "../assets/social_media/mail.svg"

export default function Home() {
    let shadow = { filter: `drop-shadow(0  0 0.75rem  #f6f)` }

    return (
        <div className="flex flex-col lg:flex-row my-2 lg:m-0">
            <section className="w-full lg:w-1/4 text-white flex-0.5 bg-gray-600 lg:mt-5 rounded-lg  p-2 h-auto">
                <ul className="text-lg font-semibold tracking-wide text-gray-300">
                    <li title="section-left-header" className="flex items-center px-3 lg:px-5 py-5 text-2xl text-white">
                        Social Media
                    </li>
                    <a href={process.env.REACT_APP_GITHUB_URL} title="section-left-header" className="flex items-center justify-start py-5 w-full transition delay-5 ease-in-out hover:-translate-y-3" >
                        <img src={ github } alt="GitHub" className="w-10 mx-2 lg:mx-5" style={ shadow } />
                        <p className="px-3">GitHub</p>
                    </a>
                    <a href={process.env.REACT_APP_LINKEDIN_URL} title="section-left-header" className="flex items-center justify-start py-5 transition delay-1 ease-in-out hover:-translate-y-2">
                        <img src={ linkedin } alt="LinkedIn" className="w-10 mx-2 lg:mx-5" style={ shadow } />
                        <p className="px-3">LinkedIn</p>
                    </a>
                    <a href={process.env.REACT_APP_INSTAGRAM_URL} title="section-left-header" className="flex items-center justify-start py-5 transition delay-1 ease-in-out hover:-translate-y-2">
                        <img src={ instagram } alt="Instagram" className="w-10 mx-2 lg:mx-5" style={ shadow } />
                        <p className="px-3">Instagram</p>
                    </a>
                    <a href={process.env.REACT_APP_WHATSAPP_URL} title="section-left-header" className="flex items-center justify-start py-5 transition delay-1 ease-in-out hover:-translate-y-2">
                        <img src={ whatsapp } alt="Whatsapp" className="w-10 mx-2 lg:mx-5" style={ shadow } />
                        <p className="px-3">Whatsapp</p>
                    </a>
                    <a href={process.env.REACT_APP_MAIL_URL} title="section-left-header" className="flex items-center justify-start py-5 transition delay-1 ease-in-out hover:-translate-y-2">
                        <img src={ mail } alt="Mail" className="w-10 mx-2 lg:mx-5" style={ shadow } />
                        <p className="px-3">Mail</p>
                    </a>

                </ul>
            </section>
            <section className="w-1/3 text-white">
                I am section 2
            </section>
        </div>
    );
}