import React from 'react';
import { motion } from 'framer-motion';
import MissionVisionItem from './MissionVisionItem';

type Props = {};

function MissionVisionValues({}: Props) {
  return (
    <div className="px-4 py-16 bg-[#222222] flex flex-col space-y-10 items-center">
      <MissionVisionItem
        left="238px"
        mlStyling="lg:ml-[-30%]"
        title="Vision"
        text="To be a globally recognised ICT and Energy Resource Company focused on
          customer satisfaction. To offer internationally recognized services
          based on standards and best practice. To pay due attention to service
          delivery and customer needs."
      />

      <MissionVisionItem
        right="238px"
        title="Mission"
        text="To design, develop and manage cost effective projects and concepts
          with specific focus on customer needs without compromising standards."
      />

      <MissionVisionItem
        left="238px"
        mlStyling="lg:ml-[30%]"
        title="Careers"
        text="We are always committed to having the best minds in our team. At
          PINGTEL we ensure our employees develop their careers by through
          exposure to priceless field projects and experiences."
      />
    </div>
  );
}

export default MissionVisionValues;
