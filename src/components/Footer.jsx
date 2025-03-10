import React from "react";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        <div>
          <img className="mb-5 w-40" src={logo}></img>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-2">
            <li>00000000000</li>
            <li>example@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-200 mt-12"/>
        <p className="py-5 text-center text-sm">Copyright 2024@ Prescriptp - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
