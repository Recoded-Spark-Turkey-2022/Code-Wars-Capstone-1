import React from 'react';
import Therapistimg from './Therapistimg.svg';

function Therapist() {
  return (
    <div className="h-screen bg-amber-200 ">
      <div
        className=" lg:ml-40 md:ml-10  flex flex-col gap-6  "
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        
        <h1 className=" lg:text-5xl text-lg font-bold lg:mt-12 md:mt-12 ">
          PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
        </h1>
       
        
       
        <img className=" pb-8 lg:w-6/12  sm:w-min " src={Therapistimg} alt="therapists" />
        <p className="  lg:text-2xl font-seri text-sm lg:w-11/12 lg:pb-5 sm:w-full ">
          Tap into the worlds largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>

        <button
          type="button"
          className="lg:text-xl md:text-base w-min  lg:px-6 md:px-2  rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white "
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default Therapist;

