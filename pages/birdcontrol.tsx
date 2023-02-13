import React, { useRef, useState, useEffect } from 'react';
import Header from '@/components/layouts/Header';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaPlay } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

type Props = {};
type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

function birdcontrol({}: Props) {
  // get window dimensions
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });

  // state for video display
  const [open, setOpen] = useState(false);

  // function for displaying youtube embed video
  const showVideo = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  const { width } = windowDimensions;

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
      <Header />

      <section className="px-4 py-16 bg-[#222222] flex flex-col items-center text-white">
        <h1 className="text-2xl font-bold text-center">Bird Control</h1>
        <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
        <h4 className="w-[90%] lg:w-[60%] text-center">
          We supply, install, and maintain Laser Bird Deterrents as effective
          bird control.
        </h4>
      </section>

      <section className="px-2 md:px-4 lg:px-10 py-10">
        <div className="lg:w-[85%] xl:w-[70%] lg:mr-auto lg:ml-auto lg:max-w-[80%]">
          <h2 className="italic text-xl lg:text-2xl font fold">
            We&apos;ve got your bird solution{' '}
            <span className="hidden md:block">{text}</span>
          </h2>
          <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
          <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20 ">
            <div className="md:w-[80%] ">
              <p className="mb-6 tracking-wider leading-7">
                The AVIX Autonomic installed and maintained by Ping Telecoms is
                a fully automated laser bird repellent that keeps birds away
                24/7. Birds perceive the moving laser light as a physical threat
                and flee immediately when the beam passes by. This solution is
                proven to reduce bird nuisance by more than 70%. Bird
                habituation doesn&apos;t occur. The system can be programmed and
                monitored through an iOS and Android apps.
              </p>
            </div>

            <div className="relative w-[350px] h-[300px] md:w-[700px] md:h-[400px]">
              <Image
                src="/images/bird_control_escravos.webp"
                alt="Full AWOS station"
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
            <h2 className="text-xl lg:text-2xl">Custom laser projection</h2>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="mb-6 tracking-wider leading-7">
              A total of 150 different patterns and 20 time slots can be
              programmed into the AVIX Autonomic Mark II that Ping Telecoms
              install and maintain. Additionally, each pattern can be given a
              certain time slot, allowing for a variety of bird-repelling
              patterns throughout the day. Additionally, this automated bird
              deterrent system features 2400 distinct waypoints that let you
              selectively target problem areas.
            </p>
          </div>

          <div className="relative w-[350px] h-[300px] md:w-[450px] md:h-[400px] xl:w-[550px] xl:h-[500px] mr-auto ml-auto">
            <Image
              src="/images/bird_control_rear.webp"
              alt="Rear view of the AVIX Autonomic Mark II bird control device"
              fill
              quality={100}
              className="rounded-md"
            />
          </div>

          <div className="hidden lg:block lg:w-[50%]">
            <h2 className="text-xl lg:text-2xl">Custom laser projection</h2>
            <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
            <p className="mb-6 tracking-wider leading-7">
              A total of 150 different patterns and 20 time slots can be
              programmed into the AVIX Autonomic Mark II that Ping Telecoms
              install and maintain. Additionally, each pattern can be given a
              certain time slot, allowing for a variety of bird-repelling
              patterns throughout the day. Additionally, this automated bird
              deterrent system features 2400 distinct waypoints that let you
              selectively target problem areas.
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 md:px-4 lg:px-10 py-10 flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Agrilaser handheld
          </h1>
          <div className="w-16 h-2 bg-[#800000] mt-1 mb-6"></div>
          <p>
            We also supply and provide maintenance for the handheld Agrilaser
            bird control equipment, which effectively scares away birds from any
            area. The handheld Agrilaser lasers are very good at directly
            deterring birds. When you direct the laser at birds, they quickly
            take off because they see it as a physical threat.
          </p>
        </div>

        <div
          className={`ml-auto mr-auto relative ${open && 'hidden'}`}
          onClick={showVideo}
          onKeyDown={showVideo}
        >
          <div className="relative w-[350px] h-[215px] md:w-[580px] md:h-[320px] lg:w-[650px] lg:h-[400px]">
            <Image
              src="/images/bird_control_agrilaser.webp"
              alt="Agrilaser handheld brid control device"
              fill
              quality={100}
              className="opacity-25"
            />
          </div>
          <FaPlay className="text-[#800000] text-4xl lg:text-6xl absolute inset-0 m-auto" />
        </div>

        <div className={`mr-auto ml-auto ${open ? 'block' : 'hidden'}`}>
          <iframe
            width={
              width && width <= 768
                ? '350'
                : width && width <= 1024
                ? '580'
                : '650'
            }
            height={
              width && width <= 768
                ? '215'
                : width && width <= 1024
                ? '320'
                : '400'
            }
            src="https://www.youtube.com/embed/UjBBp6SFaVw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="border-0"
          />
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

export default birdcontrol;
