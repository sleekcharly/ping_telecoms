import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  left?: string;
  right?: string;
  mlStyling?: string;
  title: string;
  text: string;
};

function MissionVisionItem({ left, right, mlStyling, title, text }: Props) {
  return (
    <motion.div
      initial={{ left: `${left ? left : right}` }}
      whileInView={{ left: '0px' }}
      transition={{ type: 'spring' }}
      className={`bg-gray-600 p-2 flex flex-col items-center rounded-md w-full md:w-[70%] lg:w-[40%] ${mlStyling}`}
    >
      <h2 className="text-white text-xl">{title}</h2>
      <div className="w-16 h-1 bg-[#800000] mt-4 mb-6 rounded-full"></div>
      <p className="text-white text-center">{text}</p>
    </motion.div>
  );
}

export default MissionVisionItem;
