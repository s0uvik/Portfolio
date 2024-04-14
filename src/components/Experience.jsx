import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.png";
import sass from "../assets/sass.png";
import ts from "../assets/ts.png";
import redux from "../assets/redux.png";
import router from "../assets/router.png";
import node from "../assets/node.png";
import docker from "../assets/docker.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-orange-700",
    },

    {
      id: 8,
      src: ts,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: redux,
      title: "Redux",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: router,
      title: "Router",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: docker,
      title: "docker",
      style: "shadow-blue-300",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-[#04152D] w-full pt-2 mt-4 sm:pt-6"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

