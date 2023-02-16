import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import SideNav from '../SideNav';

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
              <span className="span">Services</span>
            </NextLink>

            {/* Dropdown button */}
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button
                      onMouseEnter={({ target }: any) =>
                        open ? '' : target.click()
                      }
                      className="inline-flex w-full justify-center header-link group "
                    >
                      <span className="span flex items-center">
                        What we do
                        <FaChevronDown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/awos"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Weather Monitoring
                            </NextLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/birdcontrol"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Bird Control
                            </NextLink>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/networks"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Networks
                            </NextLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/flowsensors"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Energy Flow Sensors
                            </NextLink>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/runwaylighting"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Runway Lighting
                            </NextLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/navigation"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Navigational Aids
                            </NextLink>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/cctv"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              CCTV
                            </NextLink>
                          )}
                        </Menu.Item>
                      </div>

                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <NextLink
                              href="/training"
                              className={`${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              },
                            block px-4 py-2 text-sm`}
                            >
                              Training & Consulting
                            </NextLink>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

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
      </div>

      {/* mobile menu button */}
      <SideNav />
    </div>
  );
}

export default Header;
