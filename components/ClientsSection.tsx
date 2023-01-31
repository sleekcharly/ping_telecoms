import Image from 'next/image';
import React from 'react';

type Props = {};

function ClientsSection({}: Props) {
  return (
    <div className="px-8 py-8 flex flex-col items-center space-y-4">
      <h1 className="text-black text-lg xl:text-2xl">
        Our Esteemed <span className="italic text-red-700">clients</span>
      </h1>
      <div className="flex flex-wrap justify-center space-x-5">
        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
          <Image
            alt="Peace Microfinance bank logo"
            src="/images/peace_mfb_logo.webp"
            fill
            quality={100}
          />
        </div>
        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
          <Image
            alt="Nigerian airspace management agency logo"
            src="/images/nama_logo.gif"
            fill
            quality={100}
          />
        </div>
        <div className="relative w-32 h-28 lg:w-44 lg:h-32">
          <Image
            alt="Chevron logo"
            src="/images/chevron_logo.webp"
            fill
            quality={100}
          />
        </div>
        <div className="relative w-28 h-28 lg:w-32 lg:h-32">
          <Image
            alt="Hercules Offshore logo"
            src="/images/hercules_offshore.webp"
            fill
            quality={100}
          />
        </div>
        <div className="relative w-32 h-28 lg:w-44 lg:h-32">
          <Image
            alt="Union bank logo"
            src="/images/union_bank.webp"
            fill
            quality={100}
          />
        </div>
        <div className="relative w-32 h-28 lg:w-44 lg:h-32">
          <Image
            alt="Leventis Nigeria ltd logo"
            src="/images/leventis_logo.png"
            fill
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;
