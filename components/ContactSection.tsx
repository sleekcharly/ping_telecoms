import React from 'react';
import ContactForm from './ContactForm';

type Props = {};

function ContactSection({}: Props) {
  return (
    <section className="px-4 py-16 bg-[#222222] text-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-center items-center lg:space-x-10">
      <div className="flex flex-col space-y-4">
        <h2 className="uppercase leading-3">
          Ping Telecommunications Resources
        </h2>
        <p className="text-red-700 transition-all text-2xl font-black">
          <span className="hover:text-white">
            58, Awoniyi Elemo Street, Ajao Estate,
          </span>{' '}
          <span className="italic">lagos, Nigeria.</span>
        </p>
        <div className="w-16 h-1 bg-[#800000] mb-6"></div>
        <p className="text-lg">Email: info@pingtelecoms.net</p>
        <p className="text-lg">Phone: +2348131387005</p>
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactSection;
