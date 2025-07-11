import Lottie from "lottie-react";
import aboutLottie from "../../assets/lottie/about-me.json";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="">
      <motion.div
        className="mb-9 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center ">About Me</h2>
        <div className="w-sm border border-accent hidden md:block absolute right-0 top-1/2"></div>
      </motion.div>
      <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
        {/* animation on the left  */}
        <div className="flex items-center justify-center">
          <Lottie animationData={aboutLottie} className="w-2/3" loop={true} />
        </div>

        {/* Content on the right */}
        <div className="flex-1 flex gap-10 flex-col items-center md:items-start justify-center ">
          <p>
            Hey, I'm Habibur Rahman — a MERN stack developer who enjoys building
            things that live on the web. From clean frontend interfaces in React
            to solid backend systems with Node and Express, I like making ideas
            come to life with code. I've worked with MongoDB, REST APIs, and
            modern tools to build full-stack apps that actually solve problems —
            not just look good. Whether it's a small feature or an entire web
            app, I care about clean code, smart architecture, and making the
            user experience smooth. I'm always learning, always building, and
            always looking for the next challenge that lets me grow as a
            developer.
          </p>

          {/* Buttons with exact spacing */}
          <div className="flex space-x-4">
            <button className="px-8 py-3 btn btn-accent">Hire Me</button>
            <a
              className="px-8 py-3 btn btn-outline btn-accent"
              href="https://drive.google.com/uc?export=download&id=1Rmt_orU8SHAcOkXC_ikvymisdoroIA-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
