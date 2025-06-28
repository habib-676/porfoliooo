import React from "react";
import model from "../../assets/model.png";
import { FaDownLong, FaRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" md:h-[70vh] flex flex-col md:flex-row  items-center p-8 md:p-16 md:bg-[linear-gradient(to_right,#0d1b2a_75%,#4c956c_25%)]">
      <div className="text-center flex flex-col  items-center justify-center mb-12 md:mb-0 md:pr-12">
        <p className="text-lg md:text-xl text-primary mb-8">Hi there!</p>
        <h1 className="text-4xl md:text-6xl font-bold ">I'M HABIBUR RAHMAN </h1>
        <button className="flex items-center justify-center  border-2 border-accent bg-accent mt-10  rounded-tr-xl  rounded-br-xl ">
          <p className="text-xl md:text-2xl bg-base-100 text-center flex justify-center items-center h-12 px-3 md:w-xs">
            Full Stack Developer{" "}
          </p>
          <span className="text-base-100 py-3 px-4">
            <FaRightLong size={20} className="hidden md:block" />
            <FaDownLong size={20} className="md:hidden" />
          </span>
        </button>
      </div>
      <div className="md:w-1/2 w-sm flex justify-center md:justify-end ">
        <img
          src={model}
          alt="habib"
          className="w-full md:max-w-md max-w-sm object-cover md:mt-10 "
        />
      </div>
    </div>
  );
};

export default Banner;
