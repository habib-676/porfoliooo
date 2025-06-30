import React from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import AnimatedCursor from "react-animated-cursor";
import { CgLink } from "react-icons/cg";
import { SiGithub } from "react-icons/si";

const ProDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <motion.div className="max-w-11/12 mx-auto my-10 flex flex-col justify-center items-center min-h-screen">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        showSystemCursor={false}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid #007f5f",
        }}
        innerStyle={{
          backgroundColor: "#6ede8a",
        }}
      />
      <div className="mb-9">
        <Link to={"/"} className="btn-outline btn-accent btn">
          Back
        </Link>
      </div>
      <div
        key={data.id}
        className="card bg-linear-to-tr from-base-200 from-20% w-sm md:w-2xl to-primary to-80% shadow-sm hover:scale-105 transition-all duration-500"
      >
        <figure className="">
          <img src={data.img} className="" />
        </figure>
        <div className="flex gap-4 my-4 justify-center items-center w-full">
          <a
            href={data.live}
            target="_blank"
            className="btn btn-circle hover:scale-125 hover:bg-primary transition-all duration-200"
          >
            <CgLink />
          </a>
          <a
            href={data.github}
            target="_blank"
            className="btn btn-circle hover:scale-125 hover:bg-primary transition-all duration-200"
          >
            <SiGithub size={20} />
          </a>
        </div>
        <div className="card-body gap-2 items-start justify-between ">
          <h2 className="card-title ">{data.title}</h2>

          <div className="card-actions">
            {data.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-soft badge-sm badge-accent"
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg">🚧 Challenges Faced </h3>
            <ol className="ml-10">
              {data.challenges.map((ch) => (
                <li>{ch}</li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-lg">🔮 Future Improvements</h3>
            <ol className="ml-10">
              {data.improvements.map((ch) => (
                <li>{ch}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProDetails;
