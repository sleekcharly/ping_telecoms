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
      <NextLink href="/" className="flex items-center space-x-3 mr-[190px]">
        <div className="relative w-[120px] h-[115px]">
          <Image
            src="/images/logo.png"
            alt="Ping Telecoms Logo"
            fill
            quality="100"
          />
        </div>
        <h1 className="text-2xl font-black">
          <span className="text-gray-600">PING</span>
          <span className="text-red-700">TEL</span>
        </h1>
      </NextLink>

      <nav className="flex w-full">
        <div className="flex flex-1 space-x-8">
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
