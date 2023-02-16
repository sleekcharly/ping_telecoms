import React, { useState, useRef } from 'react';
import Header from '@/components/layouts/Header';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { animateScroll as scroll } from 'react-scroll';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { NextSeo } from 'next-seo';

type Props = { urlPath: string };

function flowsensors({ urlPath }: Props) {
  // get date year
  const date = new Date();
  const [year] = [date.getFullYear()];

  // Use the useTypewriter hook to set up the phrases
  const [text, count] = useTypewriter({
    words: ['anytime.', 'anywhere.'],
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
    <div>
      <NextSeo
        title="Ping Telecoms | Flow Sensors"
        canonical={`https://www.pingtelecoms.net${urlPath}`}
        openGraph={{
          url: `https://www.pingtelecoms.net${urlPath}`,
          title: 'Ping Telecoms | Flow Sensors',
          description:
            'At PingTelecoms, we offer installation and maintenance of OSI Energy flow sensors for oil and gas pipelines.',
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
          Emmission Flow Monitoring
        </h1>
        <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
        <h4 className="w-[90%] lg:w-[60%] text-center">
          At PingTelecoms, we offer installation and maintenance of OSI Energy
          flow sensors for oil and gas pipelines.
        </h4>
      </section>

      <section className="px-2 md:px-4 lg:px-10 py-10">
        <div className="lg:w-[85%] xl:w-[70%] lg:mr-auto lg:ml-auto lg:max-w-[80%]">
          <h2 className="italic text-xl lg:text-2xl font-bold flex">
            We&apos;ve got you covered{' '}
            <span className="hidden md:block ml-2">{text}</span>
          </h2>
          <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
          <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20 ">
            <div className="md:w-[80%] ">
              <p className="mb-6 tracking-wider leading-7">
                The Thermal Oxidizers, Wet Scrubbers, Flare Stacks,
                Incinerators, SRU, Cat Crackers, Glass Furnaces, and related
                processes with entrained/suspended liquid droplets are only a
                few tough flow applications where Ping Telecoms&apos; integrated
                OFS (Optical Flow Sensor) technology has succeeded. Chemical,
                Petrochemical Refineries, Cement, Glass, Aluminum, Waste to Gas,
                Terminal loading stations, Pulp and Paper, Steel Plants,
                Electric Arc Furnaces, and other industries are among the many
                that utilize this technology.
              </p>
            </div>

            <div className="relative w-[350px] h-[300px] md:w-[700px] md:h-[400px]">
              <Image
                src="/images/airflow.webp"
                alt="OFS airflow illustration"
                fill
                quality={100}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 md:px-4 lg:px-10 py-10 bg-[#222222] text-white">
        <div className="lg:w-[95%] xl:w-[80%] flex flex-col lg:flex-row lg:space-x-10 items-center justify-center lg:mr-auto lg:ml-auto lg:max-w-[80%]">
          <div className="lg:hidden">
            <h2 className="text-xl lg:text-2xl">OFS Measurement</h2>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="mb-4 tracking-wider leading-7">
              OFS measurement is Unaffected by changes in:
            </p>
            <ul className="list-disc ml-10 mb-6">
              <li>Temperature</li>
              <li>Pressure</li>
              <li>Gas Density</li>
              <li>Gas Composition</li>
              <li>Humidity</li>
              <li>Moisture</li>
              <li>Opacity</li>
            </ul>

            <p className="mb-4 tracking-wider leading-7">
              The OFS measurement is also not dependent on:
            </p>
            <ul className="list-disc ml-10 mb-4">
              <li>Design DP</li>
              <li>Gas Densities</li>
              <li>Differential Pressure</li>
              <li>Humidity</li>
              <li>Speed of Sound or the Speed of Light</li>
              <li>Beta Ratio</li>
              <li>Temperature</li>
            </ul>
          </div>

          <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[600px] xl:w-[550px] xl:h-[700px] mr-auto ml-auto">
            <Image
              src="/images/optical_flow.webp"
              alt="VSAT satellite"
              fill
              quality={100}
              className="rounded-md"
            />
          </div>

          <div className="hidden lg:block lg:w-[50%]">
            <h2 className="text-xl lg:text-2xl">OFS Measurement</h2>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="mb-4 tracking-wider leading-7">
              OFS measurement is Unaffected by changes in:
            </p>
            <ul className="list-disc ml-10 mb-6">
              <li>Temperature</li>
              <li>Pressure</li>
              <li>Gas Density</li>
              <li>Gas Composition</li>
              <li>Humidity</li>
              <li>Moisture</li>
              <li>Opacity</li>
            </ul>

            <p className="mb-4 tracking-wider leading-7">
              The OFS measurement is also not dependent on:
            </p>
            <ul className="list-disc ml-10 mb-4">
              <li>Design DP</li>
              <li>Gas Densities</li>
              <li>Differential Pressure</li>
              <li>Humidity</li>
              <li>Speed of Sound or the Speed of Light</li>
              <li>Beta Ratio</li>
              <li>Temperature</li>
            </ul>
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

export default flowsensors;

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
