import React from 'react';

export default function Resume() {
  return (
    <div className="w-full h-screen pt-20 bg-[#111] flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-white rounded-md mt-10">
        <iframe
          src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/KishanYadavCV.pdf`}
          className="w-full h-full border-none rounded-md"
          title="Resume"
        />
      </div>
    </div>
  );
}
