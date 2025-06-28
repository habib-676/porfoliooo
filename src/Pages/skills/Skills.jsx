import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="mb-9 relative">
        <div className="w-sm border border-accent hidden md:block absolute left-0 top-1/2"></div>
        <h2 className="text-4xl font-bold text-center ">Skills</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
        <div className="hover:scale-110 transition-all duration-400  hover:cursor-pointer p-8 rounded-2xl border border-blue-500 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-blue-700/30 backdrop-blur-sm shadow-lg">
          <h1 className="text-white font-semibold text-lg md:text-3xl">
            Frameworks
          </h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img
            src="https://skillicons.dev/icons?i=fastapi,expressjs,react,tailwindcss,vite&theme=dark&perline=7"
            alt=""
          />
        </div>
        <div className="hover:scale-110 transition-all duration-400  hover:cursor-pointer p-8 rounded-2xl border border-green-500 bg-gradient-to-br from-green-900/60 via-green-50-800/40 to-green-700/30 backdrop-blur-sm shadow-lg">
          <h1 className="text-white font-semibold text-lg md:text-3xl">
            Languages
          </h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img
            src="https://skillicons.dev/icons?i=css,html,markdown,c,javascript,nodejs&theme=dark&perline=7"
            alt=""
          />
        </div>
        <div className="hover:scale-110 transition-all duration-400  hover:cursor-pointer p-8 rounded-2xl border border-yellow-500 bg-gradient-to-br from-yellow-900/60 via-yellow-800/40 to-yellow-700/30 backdrop-blur-sm shadow-lg">
          <h1 className="text-white font-semibold text-lg md:text-3xl">
            Tools And Others
          </h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img
            src="https://skillicons.dev/icons?i=figma,firebase,git,github,linkedin,netlify&theme=dark&perline=17"
            alt=""
          />
        </div>
        <div className="hover:scale-110 transition-all duration-400  hover:cursor-pointer p-8 rounded-2xl border border-red-500 bg-gradient-to-br from-red-900/60 via-red-50-800/40 to-red-700/30 backdrop-blur-sm shadow-lg">
          <h1 className="text-white font-semibold text-lg md:text-3xl">
            Databases
          </h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img
            src="https://skillicons.dev/icons?i=firebase,mongodb&theme=dark&perline=7"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
