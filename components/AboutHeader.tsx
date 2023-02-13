import React from 'react';

type Props = {};

function AboutHeader({}: Props) {
  return (
    <div className="bg-[url('/images/networking.webp')] bg-cover text-white flex flex-col justify-center items-center px-10 space-y-5">
      <div className="h-[150px]"></div>
      <h1 className="text-2xl font-black text-center">About Ping Telecoms</h1>
      <div className="w-16 h-1 bg-[#800000] mb-6 rounded-full"></div>
      <p className="text-center w-full md:w-[80%] lg:w-[70%] xl:w-[60%] font-bold">
        Ping Telecommunications Resources Limited is an indigenous ICT company
        incorporated in Nigeria to provide cost effective and customer dependent
        services without compromising standards.
      </p>
      <button className="bg-[#800000] px-5 py-2 rounded-full uppercase font-bold">
        Get in touch
      </button>
      <div className="h-[100px]"></div>
    </div>
  );
}

export default AboutHeader;
