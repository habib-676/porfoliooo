import React from "react";
import model from "../../assets/model.png";
import { FaDownLong, FaRightLong } from "react-icons/fa6";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className=" md:h-[70vh] flex flex-col md:flex-row  items-center p-8 md:p-16 md:bg-[linear-gradient(to_right,#0d1b2a_75%,#4c956c_25%)]">
      <div className="text-center flex flex-col  items-center justify-center mb-12 md:mb-0 md:pr-12">
        <p className="text-lg md:text-xl text-primary mb-8">Hi there!</p>
        <h1 className="text-4xl md:text-6xl font-bold ">I'M HABIBUR RAHMAN </h1>
        <div className="flex gap-7 mt-5 *:hover:text-accent *:hover:scale-150">
          <a
            href="https://github.com/habib-676"
            target="#"
            className="transition-all duration-300"
          >
            <SiGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/wdhabib"
            target="#"
            className="transition-all duration-300"
          >
            <SiLinkedin size={30} />
          </a>
        </div>
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center  border-2 border-accent bg-accent mt-10  rounded-tr-xl  rounded-br-xl "
        >
          <p className="text-xl md:text-2xl bg-base-100 text-center flex justify-center items-center h-12 px-3 md:w-xs">
            Full Stack Developer
          </p>
          <span className="text-base-100 py-3 px-4 hover:*:scale-125 *:transition-all *:duration-200">
            <FaRightLong size={20} className="hidden md:block" />
            <FaDownLong size={20} className="md:hidden" />
          </span>
        </motion.button>
      </div>
      <motion.div
        className="md:w-1/2 w-sm flex justify-center md:justify-end "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={model}
          alt="habib"
          className="w-full md:max-w-md max-w-sm object-cover md:mt-10 "
        />
      </motion.div>
    </div>
  );
};

export default Banner;
