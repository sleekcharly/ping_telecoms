import React from 'react';

type Props = {};

function AboutNote({}: Props) {
  return (
    <div className="px-4 py-16 bg-gray-400 flex flex-col space-y-10 items-center">
      <p className="text-white font-bold text-center lg:text-lg lg:w-[60%]">
        We’ve been providing expert, tailored, managed and fully supported IT
        solutions to small, medium, and large businesses just like yours since
        2008.
      </p>
    </div>
  );
}

export default AboutNote;
