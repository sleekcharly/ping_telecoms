import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

type Props = {};

function RecentProjects({}: Props) {
  return (
    <div className="px-2 py-8 lg:px-4 lg:py-16 bg-[#222222] text-white flex flex-col justify-center items-center space-y-10">
      <h1 className="text-xl lg:text-3xl xl:text-5xl">
        Our recent <span className="italic text-red-700">Projects</span>
      </h1>
      <div className="relative lg:w-[80%] xl:w-[60%] justify-center lg:bg-gray-800 lg:p-8 lg:rounded-md">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={7000}
          useKeyboardArrows={true}
          showStatus={false}
          ariaLabel="Pingtel recent projects"
        >
          <div className="relative flex lg:space-x-24 justify-center items-center">
            <div className="relative w-[350px] h-[450px]">
              <Image
                alt="Catergory IV AWOS equipment installed at Chevron SONAM Platform by Ping Telecoms"
                src="/images/sonam_awos_installation.webp"
                fill
                quality={100}
                className="opacity-80 lg:opacity-100"
              />
            </div>

            <div className="absolute lg:relative">
              <h3 className="w-72 italic text-lg font-bold">
                Category IV Automated Weather Observation System Installed at
                Chevron SONAM platform.
              </h3>
            </div>
          </div>

          <div className="relative flex lg:space-x-24 justify-center items-center">
            <div className="relative w-[350px] h-[450px]">
              <Image
                alt="Autonomic Bird Control Unit installed at Escravos Chevron Nigeria"
                src="/images/bird_control_installation.webp"
                fill
                quality={100}
              />
            </div>

            <div className="absolute top-2 lg:relative">
              <h3 className="w-72 italic text-lg font-bold">
                Autonomic Bird Control Unit installed at Escravos Chevron
                Nigeria for repelling birds around the air field to prevent bird
                strikes.
              </h3>
            </div>
          </div>

          <div className="relative flex lg:space-x-24 justify-center items-center">
            <div className="relative w-[350px] h-[450px]">
              <Image
                alt="AWOS equipment installed at Chevron BOP Platform by Ping Telecoms"
                src="/images/bop_awos_installation.webp"
                fill
                quality={100}
              />
            </div>

            <div className="absolute lg:relative">
              <h3 className="w-72 italic text-lg font-bold">
                Automated Weather Observation System Installed at Chevron BOP
                export platform
              </h3>
            </div>
          </div>

          <div className="relative flex lg:space-x-24 justify-center items-center">
            <div className="relative w-[450px] h-[400px]">
              <Image
                alt="AWOS equipment installed at Chevron PARABE Platform by Ping Telecoms"
                src="/images/parabe_awos_chevron.webp"
                fill
                quality={100}
              />
            </div>

            <div className="absolute bottom-2 lg:relative">
              <h3 className="w-72 italic text-lg font-bold">
                Automated Weather Observation System Installed at Chevron PARABE
                platform
              </h3>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default RecentProjects;
