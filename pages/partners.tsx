import Layout from '@/components/layouts/Layout';
import Image from 'next/image';
import React from 'react';

type Props = {};

function partners({}: Props) {
  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <Layout>
        <div className="py-4 px-2 lg:px-4 lg:py-16 bg-[#222222] flex flex-col items-center ">
          <div className="bg-white px-2 lg:px-10 py-6 text-gray-700 lg:w-[90%] xl:w-[70%] flex flex-col space-y-10 lg:flex-row  lg:space-y-0 lg:space-x-4 rounded-md">
            <div className="w-full md:w-[90%] lg:w-[460px] flex flex-col mr-auto ml-auto">
              <h1 className="text-xl font-bold text-right capitalize">
                we work with the
              </h1>
              <h1 className="text-xl font-bold text-right capitalize mb-4">
                Best Partners
              </h1>

              <p className="text-base text-right mb-4">
                While we are at the forefront of, and specialize in providing
                cost effective and customer dependent services, we have
                partnered with industry leaders in their chosen fields to
                maintain international standards and keep pace with global
                trends in the industry.
              </p>

              <div className="relative w-[350px] h-[200px] md:w-[600px] md:h-[320px] lg:w-[450px] lg:h-[250px] mr-auto ml-auto">
                <Image
                  src="/images/partner1.webp"
                  alt="Ping Telecoms and Optical Scientific Instruments"
                  fill
                  quality={100}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mr-auto ml-auto">
              <div className="relative w-[120px] h-[80px] md:w-[150px] md:h-[90px] lg:w-[125px] lg:h-[85px] hover:scale-125 transition-all duration-200">
                <Image
                  src="/images/osi_logo.webp"
                  alt="Optical Scientific Logo"
                  fill
                  quality={100}
                />
              </div>
              <div className="relative w-[150px] h-[90px] ml-32 lg:ml-0 hover:scale-125 transition-all duration-200">
                <Image
                  src="/images/disitron.webp"
                  alt="Disitron Logo"
                  fill
                  quality={100}
                />
              </div>
              <div className="relative w-[300px] h-[90px] lg:w-[200px] lg:h-[70px] hover:scale-125 transition-all duration-200">
                <Image
                  src="/images/skyvision.webp"
                  alt="Sky vision Logo"
                  fill
                  quality={100}
                />
              </div>
              <div className="relative w-[300px] h-[90px] lg:w-[200px] lg:h-[70px] md:mt-10 lg:mt-20 hover:scale-125 transition-all duration-200">
                <Image
                  src="/images/bird_control_logo.webp"
                  alt="Bird control group Logo"
                  fill
                  quality={100}
                />
              </div>
              <div className="relative w-[250px] h-[90px] hover:scale-125 transition-all duration-200">
                <Image
                  src="/images/nautel_logo.webp"
                  alt="Nautel Logo"
                  fill
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default partners;
