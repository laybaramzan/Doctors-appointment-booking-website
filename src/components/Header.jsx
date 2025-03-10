import React from "react";
import grpprofile from "../assets/group_profiles.png";
import arrowicon from "../assets/arrow_icon.svg";
import headerimg from "../assets/header_img.png";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[var(--color-primary)] rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight leading">
          Book Appointment
          <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white font-sm font-light">
          <img className="w-28" src={grpprofile}></img>
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm-block"/>
            schedule your appointment hassle-free
          </p>
        </div>
        <a href="#speciality-menu" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300  ">
          Book Appointment<img className="w-3" src={arrowicon}></img>
        </a>
      </div>
      <div className="md:w-1/2 relative ">
        <img className="w-full h-auto md:absolute rounded-lg" src={headerimg}></img>
      </div>
    </div>
  );
};

export default Header;
