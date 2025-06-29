import Lottie from "lottie-react";
import aboutLottie from "../../assets/lottie/about-me.json";
const About = () => {
  return (
    <div className="">
      <div className="mb-9 relative">
        <h2 className="text-4xl font-bold text-center ">About Me</h2>
        <div className="w-sm border border-accent hidden md:block absolute right-0 top-1/2"></div>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
        {/* animation on the left  */}
        <div>
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
            <button className="px-8 py-3 btn btn-outline btn-accent">
              Download Resume 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
