import React from 'react';
import ServiceImageContainer from './ServiceImageContainer';

type Props = {};

function ServicesSection({}: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-black text-white p-10 md:p-16 lg:p-28 space-y-5"
      style={{ fontFamily: 'Poppins' }}
    >
      <h1 className="text-xl lg:text-3xl xl:text-5xl">
        How can we <span className="italic text-red-700">help?</span>
      </h1>
      <div className="w-8 h-1 bg-red-700"></div>
      <p className="lg:w-[65%] xl:w-[30%] text-base lg:text-lg leading-8">
        Ping Telecoms is a fully Managed IT Support company specialising in
        supporting and improving technology within Businesses, and Government
        agencies.
      </p>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 ">
        <ServiceImageContainer
          imgName="awos-image"
          altText="AWOS"
          title="Weather"
          body="We supply, install and maintain Altimeter Stations, Automated Weather Observing Systems with scaled or complete suite of sensors"
          position="right"
          linkText="awos"
        />

        <ServiceImageContainer
          imgName="aerolaser_bird_control"
          altText="Aerolaser bird control equipment"
          title="Bird Control"
          body="The Aerolaser Groundflex installed by Ping Telecoms offers airports a solution to control birds hotspots."
          position="left"
          linkText="birdcontrol"
        />
      </div>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        <ServiceImageContainer
          imgName="control_tower"
          altText="Control tower image"
          title="Navigation"
          body="We maintain Navigational aid like Non-directional radio Beacon (NDB), Instrument Landing System (ILS), Distance Measurement Equipment (DME) and Very High Omni Directional Range (VOR)."
          position="right"
          linkText="navigation"
        />

        <ServiceImageContainer
          imgName="emission"
          altText="Gas flare pipe"
          title="Energy"
          body="We install and maintain optical flow sensors for oil and gas pipe lines.."
          position="left"
          linkText="flowsensors"
        />
      </div>
    </div>
  );
}

export default ServicesSection;
