import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Footer({}: Props) {
  // get date year
  const date = new Date();
  const [year] = [date.getFullYear()];
  return (
    <div>
      <section className="px-4 py-10 flex flex-col md:flex-row md:space-x-28 md:items-center md:justify-center space-y-10 md:space-y-0 ">
        <div>
          <NextLink
            href="/"
            className="flex flex-1 items-center space-x-1 lg:space-x-3 "
            data-testid="home_logo_link"
          >
            <div className="relative w-[80px] h-[75px] md:w-[90px] md:h-[85px] lg:w-[100px] lg:h-[95px]">
              <Image
                src="/images/logo.png"
                alt="Ping Telecoms Logo"
                fill
                quality="100"
                data-testid="home_logo_link_image"
              />
            </div>
            <h1 className="text-lg lg:text-xl xl:text-2xl font-black">
              <span className="text-gray-600">PING</span>
              <span className="text-red-700">TEL</span>
            </h1>
          </NextLink>
        </div>

        <div className="flex flex-col space-y-10 md:flex-row md:space-x-28 md:space-y-0 ">
          <div className="flex flex-col space-y-2  text-base">
            <h1 className="uppercase tracking-wider font-bold">links</h1>
            <div className="flex md:flex-col justify-around md:w-[90px] md:space-y-10">
              <p className="hover:pl-2 hover:text-[#800000] hover:font-bold transition-all duration-500">
                {'>'} Home
              </p>
              <p className="hover:pl-2 hover:text-[#800000] hover:font-bold transition-all duration-500">
                {'>'} About
              </p>
              <p className="hover:pl-2 hover:text-[#800000] hover:font-bold transition-all duration-500">
                {'>'} Services
              </p>
              <p className="hover:pl-2 hover:text-[#800000] hover:font-bold transition-all duration-500">
                {'>'} Contact
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-2 text-base">
            <h1 className="uppercase tracking-wider font-bold">Services</h1>
            <div className="flex flex-col space-y-1">
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Weather Monitoring
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Bird Control
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Networks
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Energy Flow Sensors
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Runway Lighting
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Navigatonal Aids
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                CCTV
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Disaster Recovery
              </p>
              <p className="pb-1  text-[#800000] border-b-2 border-[#800000] opacity-60 hover:opacity-80 hover:pl-2 transition-all duration-500">
                Training & Consulting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-5 bg-black text-white text-xs md:text-sm flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0  space-y-4 items-center justify-center lg:justify-between lg:px-20 text-center">
        <p>
          Copyright ©{year} Ping Telecommunications Resources Ltd. All rights
          reserved.
        </p>

        <div className="flex items-center space-x-2">
          <p>Follow us: </p>
          <div className="cursor-pointer hover:scale-110 ease-in duration-300 border border-white rounded-md">
            <SocialIcon
              url="https://web.facebook.com/pingtelecoms/"
              fgColor="white"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
          <div className="cursor-pointer hover:scale-110 ease-in duration-300 border border-white rounded-md">
            <SocialIcon
              url="https://twitter.com/pingtelecoms"
              fgColor="white"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
          <div className="cursor-pointer hover:scale-110 ease-in duration-300 border border-white rounded-md">
            <SocialIcon
              url="https://www.linkedin.com/company/ping-telecommunications-resources-ltd/"
              fgColor="white"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
