import React from "react";
import contact from "../assets/contact_image.png";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500 pt-10">
        <p>
          CONTACT<span className="font-medium text-gray-700"> US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm">
        <img className="w-full max-w-[360px]" src={contact}></img>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (000) 000-0000
            <br /> Email: greatstackdev@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">CAREERS AT PRESCRIPTO</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
