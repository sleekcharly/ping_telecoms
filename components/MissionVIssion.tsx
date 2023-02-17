import Image from 'next/image';
import React from 'react';
import {
  FaBahai,
  FaBullhorn,
  FaWpexplorer,
  FaConnectdevelop,
} from 'react-icons/fa';

type Props = {};

function MissionVission({}: Props) {
  return (
    <div className="bg-black text-white p-10 md:p-16 lg:p-24 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-xl lg:text-3xl xl:text-5xl">We Serve to Meet</h1>
      <h3 className="text-lg lg:text-xl xl:text-2xl">
        Your Communication and Energy Needs
      </h3>
      <div className="w-8 h-1 bg-red-700"></div>

      <p className="lg:w-[50%] text-center">
        At PINGTEL we are always commited to offering the best solutions
        possible for your IT resources and Energy Needs{' '}
      </p>

      <div className="flex flex-col space-y-3 lg:space-y-7 xl:flex-row xl:space-y-0 xl:space-x-7">
        <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-7 lg:space-y-0 ">
          <div className="flex flex-col space-y-3 lg:w-[300px] items-center bg-white text-black py-8 px-2 hover:py-2 hover:bg-[#800000] hover:text-white   hover:first:text-white transition-all duration-75 ease-in">
            <FaBahai className="w-10 h-10" />
            <h2 className="text-2xl">Our Vision</h2>
            <p className="text-center text-sm md:text-base">
              To be a globally recognised ICT and Energy Resource Company
              focused on customer satisfaction. To offer internationally
              recognized services based on standards and best practice. To pay
              due attention to service delivery and customer needs.
            </p>
          </div>

          <div className="flex flex-col space-y-3 lg:w-[300px] items-center bg-white text-black py-8 px-2 hover:py-2 hover:bg-[#800000] hover:text-white  hover:first:text-white transition-all duration-75 ease-in">
            <FaBullhorn className="w-10 h-10" />
            <h2 className="text-2xl">Our Mission</h2>
            <p className="text-center text-sm md:text-base">
              To design, develop and manage cost effective projects and concepts
              with specific focus on customer needs without compromising
              standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-7 lg:space-y-0">
          <div className="flex flex-col space-y-3 lg:w-[300px] items-center bg-white text-black py-8 px-2 hover:py-2 hover:bg-[#800000] hover:text-white  hover:first:text-white transition-all duration-75 ease-in">
            <FaConnectdevelop className="w-10 h-10" />
            <h2 className="text-2xl">What we do</h2>
            <p className="text-center text-sm md:text-base">
              Our core business areas are in the design, development,
              installation, and management of Weather Equipments, Navigational
              Aids, HF/VHF/UHF Radios, Bird control systems, and Environmental
              emission sensors.
            </p>
          </div>

          <div className="flex flex-col space-y-3 lg:w-[300px] items-center bg-white text-black py-8 px-2 hover:py-2 hover:bg-[#800000] hover:text-white  hover:first:text-white transition-all duration-75 ease-in">
            <FaWpexplorer className="w-10 h-10" />
            <h2 className="text-2xl">Careers</h2>
            <p className="text-center text-sm md:text-base">
              We are always committed to having the best minds in our team. At
              PINGTEL we ensure our employees develop their careers through
              exposure to priceless field projects and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVission;
