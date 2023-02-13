import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import NextLink from 'next/link';

type Props = {};

function AboutSection({}: Props) {
  // Use the useTypewriter hook to set up the phrases
  const [text, count] = useTypewriter({
    words: [
      'personalized.',
      'affordable.',
      'flexible.',
      'cutting edge.',
      'acceptable.',
      'proven.',
      'secure.',
      'trusted.',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 px-4 py-16 bg-[#222222] text-white items-center justify-center">
      <div className="md:w-[40%]">
        <h3 className="uppercase text-xl text-red-700 font-black tracking-widest mb-5">
          about us
        </h3>

        <h1 className="mb-4 text-2xl lg:text-3xl">
          Ping Telecoms solutions are{' '}
          <span className="text-red-700 font-bold italic">{text}</span>
          <Cursor cursorColor="white" />
        </h1>

        <div className="w-16 h-1 bg-[#800000] mb-6"></div>

        <p className="text-base mb-5">
          Ping Telecommunications Reseource Ltd ia an indigenous ICT company
          incorporated in Nigeria to provide cost effective and customer
          dependent services without compromising standards. We are motivated to
          help industries and corporations reduce running costs, increase
          capacity and make good returns on their investment
        </p>

        <NextLink
          href="/about"
          role="button"
          className="py-1 px-5 bg-[#800000] rounded-full"
        >
          Learn more
        </NextLink>
      </div>

      <div className="relative w-[360px] h-[500px]">
        <Image
          src="/images/team_photo1.webp"
          alt="Ping Telecoms staff working on AWOS device at Escravos"
          fill
          quality={100}
        />
      </div>
    </div>
  );
}

export default AboutSection;
