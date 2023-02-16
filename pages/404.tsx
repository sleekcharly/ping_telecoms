import Header from '@/components/layouts/Header';
import ServicesItem from '@/components/ServicesItem';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

function NotFound({}: Props) {
  // get date year
  const date = new Date();
  const [year] = [date.getFullYear()];

  return (
    <div>
      <Header />
      <section className="bg-slate-300 flex flex-col items-center justify-center ">
        <div className="text-center flex flex-col space-y-6 mb-6 lg:mb-10">
          <h1 className="font-black text-[70px] lg:text-[120px]">Oops!</h1>
          <p className="text-xl lg:text-3xl">
            We can&apos;t seem to find the page you are looking for.{' '}
          </p>
          <p className="text-base lg:text-lg">
            Here are a few services we offer, feel free to contact us for a
            quote!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-10">
          <ServicesItem
            image="/images/osi_Visibility_sensor.webp"
            altText="OSI visibility sensor"
            title="Weather Monitoring"
            text="We supply, install, and maintain Automated Weather Observing Systems."
            linkText="awos"
          />

          <ServicesItem
            image="/images/bird_control_escravos.webp"
            altText="Agrilaser Bird control equipment"
            title="Bird Control"
            text="Ping Telecoms offers airports a solution to control birds hotspots."
            linkText="birdcontrol"
          />

          <ServicesItem
            image="/images/network_management.webp"
            altText="Networks"
            title="Networks"
            text="We implement and support Wireless networks for Internet access, and corporate online operations."
            linkText="networks"
          />

          <ServicesItem
            image="/images/optical_flow_sensor.webp"
            altText="OSI Flow Sensor"
            title="Energy Flow Sensors"
            text="We install and maintain optical flow sensors for oil and gas pipe lines."
            linkText="flowsensors"
          />

          <ServicesItem
            image="/images/nautel_ndb.webp"
            altText="NDB Sensor"
            title="Navigational Aids"
            text="We maintain Navigational aids like Non-directional radio Beacon (NDB)."
            linkText="navigation"
          />

          <ServicesItem
            image="/images/ping_telecoms_training.webp"
            altText="training class"
            title="Training & Consulting"
            text="We train engineers and students in wireless networking concepts, VSAT installation principles and techniques."
            linkText="training"
          />

          <ServicesItem
            image="/images/cctv.webp"
            altText="cctv camera"
            title="CCTV Surveillance"
            text="We run installation and maintenance of CCTV cameras for small, medium and large enterprises."
            linkText="cctv"
          />

          <ServicesItem
            image="/images/runway.webp"
            altText="Runway lighting system"
            title="Runway Lighting"
            text="At Ping Telecoms, we offer installation and maintenance of Runway Lights for airports and private airstrips."
            linkText="runwaylighting"
          />
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

export default NotFound;
