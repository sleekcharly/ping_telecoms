import Image from 'next/image';
import React from 'react';
import ServicesItem from './ServicesItem';

type Props = {};

function ServicesContainer({}: Props) {
  return (
    <div className="px-4 py-16 bg-[#222222] text-white flex flex-col space-y-10 items-center">
      <div>
        <h1 className="text-3xl lg:text-5xl">Services</h1>
        <h3>
          Our core business areas are in the design, development, and management
          of the following services.
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        <ServicesItem
          image="/images/osi_Visibility_sensor.webp"
          altText="OSI visibility sensor"
          title="Weather Monitoring"
          text="We supply, install, and maintain Automated Weather Observing Systems."
        />

        <ServicesItem
          image="/images/bird_control_escravos.webp"
          altText="Agrilaser Bird control equipment"
          title="Bird Control"
          text="Ping Telecoms offers airports a solution to control birds hotspots."
        />

        <ServicesItem
          image="/images/network_management.webp"
          altText="Networks"
          title="Networks"
          text="We implement and support Wireless networks for Internet access, and corporate online operations."
        />

        <ServicesItem
          image="/images/optical_flow_sensor.webp"
          altText="OSI Flow Sensor"
          title="Energy Flow Sensors"
          text="We install and maintain optical flow sensors for oil and gas pipe lines."
        />

        <ServicesItem
          image="/images/nautel_ndb.webp"
          altText="NDB Sensor"
          title="Navigational Aids"
          text="We maintain Navigational aids like Non-directional radio Beacon (NDB)."
        />

        <ServicesItem
          image="/images/ping_telecoms_training.webp"
          altText="training class"
          title="Training & Consulting"
          text="We train engineers and students in wireless networking concepts, VSAT installation principles and techniques."
        />

        <ServicesItem
          image="/images/cctv.webp"
          altText="cctv camera"
          title="CCTV Surveillance"
          text="We run installation and maintenance of CCTV cameras for small, medium and large enterprises."
        />

        <ServicesItem
          image="/images/runway.webp"
          altText="Runway lighting system"
          title="Runway Lighting"
          text="At Ping Telecoms, we offer installation and maintenance of Runway Lights for airports and private airstrips."
        />
      </div>
    </div>
  );
}

export default ServicesContainer;
