import React, { useState, useRef } from 'react';
import Header from '../components/layouts/Header';
import { SocialIcon } from 'react-social-icons';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { animateScroll as scroll } from 'react-scroll';
import toast from 'react-hot-toast';
import { NextSeo } from 'next-seo';

type Props = { urlPath: string };

function awos({ urlPath }: Props) {
  // get date year
  const date = new Date();
  const [year] = [date.getFullYear()];

  // Use the useTypewriter hook to set up the phrases
  const [text, count] = useTypewriter({
    words: ['Anytime.', 'Anywhere.'],
    loop: true,
    delaySpeed: 2000,
  });

  // scroll to top of the page
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  // setup for email form functionality

  // define error and loading state constants
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // form ref
  const form = useRef<HTMLFormElement>(null);

  // send email functionality
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // prevent default form submit behavior

    // set loading state
    setLoading(true);

    if (
      form.current?.user_name.value &&
      form.current?.user_email.value &&
      form.current?.subject.value &&
      form.current?.message.value
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
        )
        .then(
          (result) => {
            form.current?.reset();
            setLoading(false);
            setError('');
            scrollToTop();
            toast.success('Email sent successfully!');
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          },
        );
    } else {
      console.log('no form data to send');
      setLoading(false);
      setError('Please fill in all fields of the form!');
      return;
    }
  };

  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <NextSeo
        title="Ping Telecoms | AWOS"
        canonical={`https://www.pingtelecoms.net${urlPath}`}
        openGraph={{
          url: `https://www.pingtelecoms.net${urlPath}`,
          title: 'Ping Telecoms | AWOS',
          description:
            'We supply, install, and maintain Altimeter stations, Automated Weather Observing Systems with scaled or complete suite of sensors.',
          site_name: 'Ping Telecoms',
          type: 'website',
        }}
        twitter={{
          site: '@pingtelecoms',
          cardType: 'summary',
        }}
      />
      <Header />

      <section className="px-4 py-16 bg-[#222222] flex flex-col items-center text-white">
        <h1 className="text-2xl font-bold text-center">
          Automated Weather Monitoring
        </h1>
        <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
        <h4 className="w-[90%] lg:w-[60%] text-center">
          We supply, install, and maintain Altimeter stations, Automated Weather
          Observing Systems with scaled or complete suite of sensors.
        </h4>
      </section>

      <section className="px-2 md:px-4 lg:px-10 py-10">
        <div className="lg:w-[70%] lg:mr-auto lg:ml-auto lg:max-w-[80%]">
          <h2 className="italic text-2xl font-bold flex">
            We&apos;ve got you covered{' '}
            <span className="ml-2 hidden md:block">{text}</span>
          </h2>
          <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
          <div className="flex flex-col space-y-4 justify-center items-center md:items-start md:flex-row md:space-y-0 md:space-x-4 ">
            <div className="md:w-[60%] lg:w-[80%]">
              <p className="mb-6">
                We supply, install, and maintain OSI AWOS AV system for airports
                and private airstrips. The OSI AWOS AV system is a fully
                automated aviation weather observing and reporting system
                designed to support airborne and ground users. The AWOS is
                equipped with dual-pressure sensors for determining official
                altimeter settings, visibility, and reporting via UHF data
                radio, Internet, land line or cell phones.
              </p>

              <p>A basic OSI AWOS AV system consists of:</p>
              <ul className="list-disc mb-6 ml-10">
                <li>Barometric pressure sensors</li>
                <li>Visibility sensor</li>
              </ul>

              <p>It can be enhanced with:</p>
              <ul className="list-disc ml-10">
                <li>Wind speed/direction sensor</li>
                <li>Temperature sensor</li>
                <li>Humidity sensor</li>
                <li>Ceilometer</li>
              </ul>
            </div>

            <div className="relative w-[350px] h-[600px]">
              <Image
                src="/images/full_awos.webp"
                alt="Full AWOS station"
                fill
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 bg-[#222222]">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 items-center md:justify-center">
          <p className="text-white md:w-[40%] lg:text-lg text-center">
            A full OSI AWOS AV™ system calculates the altimeter setting, density
            altitude, condensation altitude, dew point - and can report the
            prevailing and gust wind components for pre-programmed runway
            headings. With OSI AV software and a Digital Data Receiver (DDR),
            tower weather telemetry and any NOTAMs are communicated by broadcast
            audio on a pilot-activated VHF frequency or an Endless Loop
            Dedicated Frequency (ELDF) on a specified VHF frequency; or by
            viewing the operator&apos;s terminal display in the FBO location,
            Internet and dialup voice modem options allow remote user access
            from anywhere on earth.
          </p>

          <div>
            <div className="relative w-[350px] h-[450px] lg:w-[500px] lg:h-[750px]">
              <Image
                src="/images/sonam_awos_installation.webp"
                alt="Awos system installed at Chevron Sonam"
                fill
                quality={100}
              />
            </div>
            <p className="w-[330px] lg:w-full text-gray-400 text-xs text-center italic">
              Full AWOS system installed at Chevron Nigria Sonam platform
            </p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <div className="flex flex-col space-y-4 items-center justify-center lg:flex-row lg:space-y-0 lg:space-x-10">
          <div className="lg:hidden md:w-[90%]">
            <h1 className="text-xl lg:text-2xl">Visibility Sensors</h1>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="mb-6 tracking-wider leading-7">
              The OWI-430 DSP-WIVIS which is a part of the AWOS Category IV
              system installed and maintained by Ping Telecoms is the most
              advanced weather and visibility sensor ever made. The fully
              automated instrument provides accurate visibility, present weather
              and precipitation measurement in a single sensor. This 3rd
              generation intelligent sensor uses all digital signal processing
              (DSP) for no-drift high-accuracy results.
            </p>

            <p className="mb-3 tracking-wider leading-7">
              Some advantages of this sensor include:
            </p>
            <ul className="list-disc ml-4 tracking-wider leading-6 ">
              <li>
                Combines present weather identification, precipitation
                measurement and visibility into a single rugged package.
              </li>
              <li>Outstanding performance yet low cost.</li>
              <li>Advanced scintillation technology.</li>
              <li>
                Intelligent algorithms based on over 100 million hours of OSi
                sensor field data.
              </li>
              <li>
                Rugged design - field proven from tropical to sub-arctic
                environments.
              </li>
              <li>
                Long-term reliability - designed for unattended operation
                24/7/365.
              </li>
            </ul>
          </div>

          <div className="relative w-[380px] h-[250px] md:w-[550px] md:h-[400px]">
            <Image
              src="/images/visibility_sensor.webp"
              alt="OSI Visibility sensor"
              fill
              quality={100}
            />
          </div>

          <div className="hidden lg:block lg:w-[50%]">
            <h1 className="text-xl lg:text-2xl">Visibility Sensors</h1>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="mb-6 tracking-wider leading-7">
              The OWI-430 DSP-WIVIS which is a part of the AWOS Category IV
              system installed and maintained by Ping Telecoms is the most
              advanced weather and visibility sensor ever made. The fully
              automated instrument provides accurate visibility, present weather
              and precipitation measurement in a single sensor. This 3rd
              generation intelligent sensor uses all digital signal processing
              (DSP) for no-drift high-accuracy results.
            </p>

            <p className="mb-3 tracking-wider leading-7">
              Some advantages of this sensor include:
            </p>
            <ul className="list-disc ml-4 tracking-wider leading-6 ">
              <li>
                Combines present weather identification, precipitation
                measurement and visibility into a single rugged package.
              </li>
              <li>Outstanding performance yet low cost.</li>
              <li>Advanced scintillation technology.</li>
              <li>
                Intelligent algorithms based on over 100 million hours of OSi
                sensor field data.
              </li>
              <li>
                Rugged design - field proven from tropical to sub-arctic
                environments.
              </li>
              <li>
                Long-term reliability - designed for unattended operation
                24/7/365.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-6 bg-[#222222]">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 items-center md:justify-center">
          <div className=" lg:w-[50%]">
            <h1 className="text-white text-xl lg:text-2xl">
              CLOUD BASE Sensor
            </h1>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="text-white lg:text-lg mb-4">
              Ping Telecoms provides high performance cloud height sensors
              (ceilometers) that give accurate cloud and obscuration information
              as part of the complete AWOS Category IV.
            </p>
            <p className="text-white lg:text-lg mb-4 ">
              The Ceilometer is durable with a demonstrated
              mean-time-between-failures of over 150,000 hours and laser life of
              10 years. The ceilometer has been tested to IEC environmental
              standards for vibration, shock, impulse voltages, transients,
              operating temperature, and EMI susceptibility and emissions.
            </p>

            <p className="text-white lg:text-lg mb-2">
              The CMBE Ceilometer installed with the AWOS has the following
              features:
            </p>
            <ul className="text-white list-disc ml-6">
              <li>Detects up to five different Cloud layers</li>
              <li>Sky coverage Algorithm</li>
              <li>
                Eye-safe laser for a detection range of 25,000 or 40,000 feet
              </li>
              <li>
                Automatic self-adjustment means no periodic, manual adjustments
                are needed
              </li>
              <li>
                Small, lightweight and modern design with flexible power supply
                (12 VDC or 110/240 VAC)
              </li>
            </ul>
          </div>

          <div>
            <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/images/ceilometer.webp"
                alt="CMBE Ceilometer sensor"
                fill
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 flex flex-col items-center bg-slate-700">
        <div className="flex flex-col w-[300px] md:w-[400px] space-y-4 text-white">
          <h2 className="text-2xl">Request a Quote!</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4 "
          >
            <input
              name="user_name"
              type="text"
              placeholder="Your name"
              className="p-2 rounded-md placeholder:text-gray-700 text-gray-700"
            />
            <input
              name="user_email"
              type="text"
              placeholder="Your email address"
              className="p-2 rounded-md placeholder:text-gray-700 text-gray-700"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="p-2 rounded-md placeholder:text-gray-700 text-gray-700"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your message"
              className="p-2 rounded-md placeholder:text-gray-700 text-gray-700"
            />
            <button
              className="w-full bg-[#800000] py-2 rounded-full flex items-center justify-center space-x-3"
              type="submit"
            >
              <p className="font-bold">Send message</p>
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
            </button>

            {error && (
              <p className="mt-5 text-yellow-200 font-bold italic">
                *** {error} ***
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="px-4 py-5 bg-black text-white text-xs md:text-sm flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0  space-y-4 items-center justify-center lg:justify-between lg:px-20 text-center">
        <p>
          Copyright ©{year} Ping Telecommunications Resources Ltd. All rights
          reserved.
        </p>

        <div className="flex items-center space-x-2">
          <p>Follow us: </p>
          <div className="cursor-pointer hover:scale-110 ease-in duration-300 border border-white rounded-md">
            <SocialIcon
              url="https://web.facebook.com/pingtelecoms/"
              fgColor="white"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
          <div className="cursor-pointer hover:scale-110 ease-in duration-300 border border-white rounded-md">
            <SocialIcon
              url="https://twitter.com/pingtelecoms"
              fgColor="white"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
          <div className="cursor-pointer hover:scale-110 ease-in duration-300 border border-white rounded-md">
            <SocialIcon
              url="https://www.linkedin.com/company/ping-telecommunications-resources-ltd/"
              fgColor="white"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default awos;

// get server side props with SSR
export async function getServerSideProps(context: any) {
  // get page url
  const urlPath = context.resolvedUrl;
  return {
    props: {
      urlPath: urlPath,
    },
  };
}
