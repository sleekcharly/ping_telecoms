import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';

type Props = {};

function CarouselContainer({}: Props) {
  return (
    <div data-testid="carousel-container">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        useKeyboardArrows={true}
        showStatus={false}
        ariaLabel="Pingtel Carousel with contact button"
      >
        <div className="relative">
          <div className="w-[500px] h-[350px] md:w-[600px] md:h-[450px] lg:w-[1000px] lg:h-[600px] xl:w-[1800px] xl:h-[850px]">
            <Image
              src="/images/download.webp"
              fill
              className="opacity-70 xl:opacity-90"
              alt="awos eqipment"
              aria-label="carousel image"
              data-testid="carousel-image"
            />
          </div>

          <div
            className="absolute top-[20%] left-[7%] md:left-[7%] lg:left-[10%] w-[80%] md:w-[40%] lg:w-[30%] flex flex-col items-center justify-center space-y-6 md:space-y-10 xl:space-y-20"
            style={{ fontFamily: 'Poppins' }}
          >
            <h1
              className="text-xl lg:text-4xl font-black text-[#800000]"
              aria-label="carousel header"
            >
              WELCOME TO PINGTELCOMS
            </h1>
            <h2
              className="text-sm md:text-xl font-black text-white bg-[#800000] bg-opacity-60 md:bg-transparent p-2 rounded-md"
              aria-label="carousel text"
            >
              An Indegeneous Telecoms / ICT company with vast experience helping
              businesses find Comprehensive IT & Energy Solutions
            </h2>

            <Link
              to="contactForm"
              smooth={true}
              duration={500}
              role="button"
              className="bg-[#800000] px-10 py-2 rounded-full text-white text-sm md:text-lg font-black "
              aria-label="carousel contact button"
              data-testid="carousel-button"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="w-[500px] h-[350px] md:w-[600px] md:h-[450px] lg:w-[1000px] lg:h-[600px] xl:w-[1800px] xl:h-[850px]">
            <Image
              src="/images/image4.webp"
              fill
              className="opacity-70 xl:opacity-90"
              alt="Avix autonomic bird control unit at Escravos Chevron Nigeria"
              aria-label="carousel image"
              data-testid="carousel-image"
            />
          </div>

          <div
            className="absolute top-[20%] left-[7%] md:left-[55%] w-[80%] md:w-[40%] lg:w-[30%] flex flex-col items-center justify-center space-y-6 md:space-y-10 xl:space-y-20"
            style={{ fontFamily: 'Poppins' }}
          >
            <h1
              className="text-xl lg:text-4xl font-black text-[#800000]"
              aria-label="carousel header"
            >
              We are Professional, Competitive & Competent
            </h1>
            <h2
              className="text-sm md:text-xl font-black text-white bg-[#800000] bg-opacity-60 md:bg-transparent p-2 rounded-md"
              aria-label="carousel text"
            >
              With our vast experience and work ethic, we are always committed
              to providing the best IT and energy resources your business may
              require.
            </h2>

            <Link
              to="contactForm"
              smooth={true}
              duration={500}
              role="button"
              className="bg-[#800000] px-10 py-2 rounded-full text-white text-sm md:text-lg font-black "
              aria-label="carousel contact button"
              data-testid="carousel-button"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
