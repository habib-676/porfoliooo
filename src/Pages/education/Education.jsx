import React from "react";
import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const Education = () => {
  return (
    <div className="">
      <div className="mb-14 relative">
        <div className="w-sm border border-accent hidden md:block absolute right-0 top-1/2"></div>
        <h2 className="text-4xl font-bold text-center ">Education</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
        <div className="border-2 border-accent p-6 hover:bg-accent transition-all duration-300 hover:text-base-100 ">
          <h3 className="text-2xl text-primary font-semibold">
            HIGHER SECONDARY <br />
            SCHOOL CERTIFICATE
          </h3>
          <ul className="mt-5 text-lg">
            <li>Government Science College,Dhaka</li>
            <li>Section : Science</li>
            <li>GPA : 5.00</li>
            <li>2020-2022</li>
          </ul>
        </div>
        <div className="border-2 border-accent p-6 hover:bg-accent transition-all duration-300 hover:text-base-100 ">
          <h3 className="text-2xl text-primary font-semibold">Currently studying</h3>
          <ul  className="mt-5 text-lg">
            <li>BSc. in Aircraft Maintenance Engineering (Avionics)/B2</li>
            <li>Institute : Aviation and Aerospace university Bangladesh</li>
            <li>2024-Now</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
