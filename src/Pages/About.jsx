import React from "react";
import about from "../assets/about_image.png";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl text-gray-500 pt-10">
        <p>
          ABOUT<span className="font-medium text-gray-700"> US</span>
        </p>
      </div>
      <div className="py-10 flex flex-col md:flex-row gap-12">
        <img src={about} className="w-full md:max-w-[360px]"></img>
        <div className="flex flex-col justify-center md:w-2/4 gap-6 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-gray-200 py-8 px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
