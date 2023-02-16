import React, { useState, Fragment } from 'react';
import NextLink from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

type Props = {};

function SideNav({}: Props) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-3xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-6 top-9 md:hidden w-8 h-8 text-[#800000] bg-white rounded-full p-1"
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
      )}
      <div
        className={`top-0 right-0 w-[55vw] bg-slate-100 pt-20 pl-4 text-black fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <ul className="">
          <li>
            <NextLink href="/" className="block text-md font- px-2 py-4">
              Home
            </NextLink>
          </li>
          <li>
            <NextLink href="/about" className="block text-md font- px-2 py-4">
              Who we are
            </NextLink>
          </li>
          <li>
            <NextLink
              href="/services"
              className="block text-md font- px-2 py-4"
            >
              services
            </NextLink>
          </li>

          {/* Dropdown button */}
          <li>
            <Menu
              as="div"
              className="relative inline-block text-left ml-2 mt-1 mb-1"
            >
              <>
                <div>
                  <Menu.Button>
                    <span className="flex items-center">
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
            </Menu>
          </li>

          <li>
            <NextLink
              href="/partners"
              className="block text-md font- px-2 py-4"
            >
              Partners
            </NextLink>
          </li>
          <li>
            <NextLink
              href="/#contactForm"
              className="block text-md font- px-2 py-4"
            >
              Contact Us
            </NextLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;
