import React from "react";
import { CgLink } from "react-icons/cg";
import fixitronics from "./images/fixitronics.png";
import greencircle from "./images/greencircle.png";
import phudu from "./images/phudu.png";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Fixitronics- Electronics Back to Life",
      img: fixitronics,
      live: "https://fixitronics-app.web.app/",
      tags: ["React", "MongoDB", "Firebase", "tailwind"],
    },
    {
      id: 2,
      title: "Greencircle- A gardeners community",
      img: greencircle,
      live: "https://gardening-community-69.web.app/",
      tags: ["React", "MongoDB", "Firebase", "tailwind"],
    },
    {
      id: 3,
      title: "Phudu- Find experience doctors",
      img: phudu,
      live: "https://habib676-phudu-online-doctors.netlify.app/",
      tags: ["React", "tailwind", "Javascript"],
    },
  ];

  return (
    <div>
      <div className="mb-9 relative">
        <div className="w-sm border border-accent hidden md:block absolute left-0 top-1/2"></div>
        <h2 className="text-4xl font-bold text-center ">Projects</h2>
      </div>
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {allProjects.map((p) => (
          <div
            key={p.id}
            className="card bg-linear-to-r from-primary from-20% to-base-200 to-80% shadow-sm hover:scale-105 transition-all duration-500"
          >
            <figure className="relative overflow-hidden group">
              <img
                src={p.img}
                className="group-hover:scale-150 group-hover:blur-xs group-hover:cursor-pointer transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href={p.live} target="_blank" className="btn btn-circle">
                  <CgLink />
                </a>
              </div>
            </figure>
            <div className="card-body gap-2 items-start justify-between ">
              <h2 className="card-title ">{p.title}</h2>

              <div className="card-actions">
                {p.tags.map((tag, index) => (
                  <div key={index} className="badge badge-soft badge-sm badge-accent">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center w-full mt-5">
                <button className="btn btn-outline btn-ghost ">
                  See details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
