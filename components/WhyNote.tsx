import React from 'react';
import ContactForm from './ContactForm';

type Props = {};

function WhyNote({}: Props) {
  return (
    <div className="px-4 py-16 bg-[#222222] flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 items-center lg:justify-center">
      <div className="flex flex-col space-y-4 p-2 lg:w-[40%]">
        <h1 className="text-white text-4xl font-black">Why Ping Telecoms?</h1>
        <div className="w-16 h-1 bg-[#800000] mt-4 mb-6 rounded-full"></div>
        <p className="text-white">
          We are motivated to help industries and corporations reduce running
          costs, increase capacity and make good returns on their investment
          through:
        </p>
        <ul className="text-white list-disc ml-[5%]">
          <li>Field proven expertise.</li>
          <li>Efficient and effective service delivery.</li>
          <li>Research and Training.</li>
          <li>Relevant Partnership.</li>
          <li>Responsiveness to our operating environment</li>
        </ul>

        <p className="text-white">
          We design, implement and support Wireless networks for Internet
          access, Intranet, corporate online operations and Virtual Private
          networks over the Internet or third party network. Our business spans
          through network auditing, upgrade and integration. Our specialities
          include but not limited to outdoor/indoor wireless networks,
          metropolitan area networks and wide area networks using bridges and
          routers.
        </p>

        <p className="text-white">
          Our strength is drawn from the skill and experience of crack team of
          professionals who have earned excellent reputation in their fields.
          Since our approach is to provide comprehensive solutions to our
          esteemed customers, we have assembled a consortium of ICT experts to
          meet our set objectives.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

export default WhyNote;
