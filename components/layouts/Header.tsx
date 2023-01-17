import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

type Props = {};

function Header({}: Props) {
  return (
    <div
      className="flex items-center mr-auto ml-auto w-[90%]"
      data-testid="header_container"
    >
      <NextLink
        href="/"
        className="flex items-center space-x-1 lg:space-x-3 mr-[50px] xl:mr-[190px]"
        data-testid="home_logo_link"
      >
        <div className="relative w-[80px] h-[75px] md:w-[90px] md:h-[85px] lg:w-[100px] lg:h-[95px]">
          <Image
            src="/images/logo.png"
            alt="Ping Telecoms Logo"
            fill
            quality="100"
            data-testid="home_logo_link_image"
          />
        </div>
        <h1 className="text-lg lg:text-xl xl:text-2xl font-black">
          <span className="text-gray-600">PING</span>
          <span className="text-red-700">TEL</span>
        </h1>
      </NextLink>

      <nav className="flex w-full" data-testid="navigation_links">
        <div className="flex flex-1 space-x-6 lg:space-x-8">
          <NextLink href="/" className="header-link group">
            <span className="span">Who we are</span>
          </NextLink>
          <NextLink href="/" className="header-link group">
            <span className="span">What we do</span>
          </NextLink>
          <NextLink href="/" className="header-link group">
            <span className="span">Partners</span>
          </NextLink>
        </div>

        <NextLink href="/" className="header-link group">
          <span className="span">Contact Us</span>
        </NextLink>
      </nav>
    </div>
  );
}

export default Header;
