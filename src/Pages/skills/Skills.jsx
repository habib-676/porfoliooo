import React from "react";
import { motion } from "framer-motion";
import skillsData from "../../assets/skillsData/skillsData";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router";

const Skills = () => {
  const middle = Math.ceil(skillsData.length / 2);
  const firstRow = skillsData.slice(0, middle);
  const secondRow = skillsData.slice(middle);

  return (
    <div>
      <motion.div
        className=" mb-14 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-sm border border-accent hidden md:block absolute left-0 top-1/2"></div>
        <h2 className="text-4xl font-bold text-center ">Skills</h2>
      </motion.div>

      <Marquee speed={30}>
        {firstRow.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 w-35 shadow-xl hover:animate-pulse hover:cursor-pointer bg p-8 rounded-2xl bg-gradient-to-tr from-primary to-base-200"
          >
            <img src={skill.img} alt="" />
            <p className="text-center text-sm mt-2">{skill.title}</p>
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" speed={30}>
        {secondRow.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 w-35 mt-8 shadow-xl hover:animate-pulse hover:cursor-pointer bg p-8 rounded-2xl bg-gradient-to-tr from-primary to-base-200"
          >
            <img src={skill.img} alt="" />
            <p className="text-center text-sm mt-2">{skill.title}</p>
          </div>
        ))}
      </Marquee>
      <div className="flex justify-end mt-8">
        <NavLink
          to="/skillDetails"
          className="btn btn-primary btn-outline mb-8"
        >
          See All Skills
        </NavLink>
      </div>
    </div>
  );
};

export default Skills;
