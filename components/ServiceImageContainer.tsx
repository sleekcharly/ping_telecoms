import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  imgName: string;
  altText: string;
  title: string;
  body: string;
  position: string;
};

function ServiceImageContainer({
  imgName,
  altText,
  title,
  body,
  position,
}: Props) {
  //   const mobile = window.innerWidth <= 768 ? true : false;

  return position == 'right' ? (
    <motion.div
      initial={{ right: '238px' }}
      whileInView={{ right: '0px' }}
      transition={{ type: 'spring' }}
      className="relative w-[380px] h-[200px] md:w-[450px] md:h-[270px] lg:w-[570px] lg:h-[265px] xl:w-[600px] xl:h-[285px]"
    >
      <div className="relative w-[380px] h-[200px] md:w-[450px] md:h-[270px] lg:w-[570px] lg:h-[265px] xl:w-[600px] xl:h-[285px]">
        <Image
          src={`/images/${imgName}.webp`}
          alt={altText}
          fill
          quality={100}
          className="opacity-80 hover:opacity-60"
        />
      </div>

      <div className="absolute bottom-2 left-2">
        <h1 className="text-lg font-bold mb-2 lg:mb-0">{title}</h1>
        <div>
          <p className="w-[60%] xl:w-[40%] text-xs md:text-sm">{body}</p>
        </div>
      </div>

      <button className="bg-white text-black font-bold text-lg xl:text-2xl py-1 px-2 xl:px-4 absolute bottom-2 right-0">
        {'>'}
      </button>
    </motion.div>
  ) : (
    <motion.div
      initial={{ left: '238px' }}
      whileInView={{ left: '0px' }}
      transition={{ type: 'spring' }}
      className="relative w-[380px] h-[200px] md:w-[450px] md:h-[270px] lg:w-[570px] lg:h-[265px] xl:w-[600px] xl:h-[285px]"
    >
      <div className="relative w-[380px] h-[200px] md:w-[450px] md:h-[270px] lg:w-[570px] lg:h-[265px] xl:w-[600px] xl:h-[285px]">
        <Image
          src={`/images/${imgName}.webp`}
          alt={altText}
          fill
          quality={100}
          className="opacity-80 hover:opacity-60"
        />
      </div>

      <div className="absolute bottom-2 left-2">
        <h1 className="text-lg font-bold mb-2 lg:mb-0">{title}</h1>
        <div>
          <p className="w-[60%] xl:w-[40%] text-xs md:text-sm">{body}</p>
        </div>
      </div>

      <button className="bg-white text-black font-bold text-lg xl:text-2xl py-1 px-2 xl:px-4 absolute bottom-2 right-0">
        {'>'}
      </button>
    </motion.div>
  );
}

export default ServiceImageContainer;
