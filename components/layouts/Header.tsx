import React, { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';

type Props = { home?: boolean };

function Header({ home }: Props) {
  // set state for  hidden mobile menu
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <div
        className="flex items-center mr-auto ml-auto md:w-[90%] p-3"
        style={{ fontFamily: 'Poppins' }}
        data-testid="header_container"
      >
        <NextLink
          href="/"
          className="flex flex-1 items-center space-x-1 lg:space-x-3 mr-[50px] xl:mr-[190px]"
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

        {/* Primary navbar items */}
        <nav className="hidden md:flex w-full" data-testid="navigation_links">
          <div className="flex flex-1 space-x-6 lg:space-x-8">
            <NextLink href="/about" className="header-link group">
              <span className="span">Who we are</span>
            </NextLink>
            <NextLink href="/services" className="header-link group">
              <span className="span">What we do</span>
            </NextLink>
            <NextLink href="/partners" className="header-link group">
              <span className="span">Partners</span>
            </NextLink>
          </div>

          {home ? (
            <Link
              smooth={true}
              duration={500}
              to="contactForm"
              className="header-link group"
            >
              <span className="span">Contact Us</span>
            </Link>
          ) : (
            <NextLink href="/#contactForm" className="header-link group">
              <span className="span">Contact Us</span>
            </NextLink>
          )}
        </nav>

        {/* mobile menu button */}
        <div
          className="flex items-center md:hidden mr-3"
          aria-label="Show mobile menu"
          role="button"
        >
          <button
            className="outline-none"
            onClick={toggleHidden}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                toggleHidden;
              }
            }}
            data-testid="mobile-menu-toggle-button"
          >
            <svg
              className="w-6 h-6 text-[#800000]"
              xlinkShow="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          hidden
            ? 'hidden'
            : 'w-[30%] absolute z-10 top-6 right-4 bg-white text-[#80000] font-sans transition duration-600'
        }
        data-testid="mobile-nav-menu"
      >
        <div className="relative">
          <button
            className="absolute top-0 right-2 text-[#800000] border border-[#800000] px-2  rounded-full"
            onClick={toggleHidden}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                toggleHidden;
              }
            }}
            data-testid="mobile-menu-nav-close-button"
          >
            X
          </button>
          <ul className="">
            <li>
              <NextLink href="/" className="block text-md font- px-2 py-4">
                Who we are
              </NextLink>
            </li>
            <li>
              <NextLink href="/" className="block text-md font- px-2 py-4">
                What we do
              </NextLink>
            </li>
            <li>
              <NextLink href="/" className="block text-md font- px-2 py-4">
                Partners
              </NextLink>
            </li>
            <li>
              <NextLink href="/" className="block text-md font- px-2 py-4">
                Contact Us
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
