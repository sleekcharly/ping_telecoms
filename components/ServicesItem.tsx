import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

type Props = {
  image: string;
  altText: string;
  title: string;
  text: string;
  linkText: string;
};

function ServicesItem({ image, altText, title, text, linkText }: Props) {
  return (
    <NextLink
      href={`/${linkText}`}
      className="w-[350px] p-4 bg-white hover:scale-105 hover:cursor-pointer rounded-md text-black transition-all duration-300"
    >
      <div className="relative w-[300px] h-[250px] bg-white mb-3 mr-auto ml-auto">
        <Image src={image} alt={altText} fill quality={100} />
      </div>

      <h2 className="font-bold text-lg mb-22">{title}</h2>
      <p className="text-sm mb-3">{text}</p>
      <button className="py-1 px-4 rounded-full bg-[#800000]  text-white ">
        <p className="uppercase">read more</p>
      </button>
    </NextLink>
  );
}

export default ServicesItem;
