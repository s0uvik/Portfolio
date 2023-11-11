import React from "react";
import college from "../assets/portfolio/college.png";
import textUtils from "../assets/portfolio/textutils.png";
import todo from "../assets/portfolio/todo.png";
import youtube from "../assets/portfolio/youtube.png";
import tmdb from "../assets/portfolio/tmdb.png";
import amazon from "../assets/portfolio/amazon.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "College Website",
      src: college,
      demo:"https://uitbu.netlify.app"
    },
    {
      id: 2,
      name: "Text Utils",
      src: textUtils,
      demo:"https://text-utils-souvik.vercel.app/"
    },
    {
      id: 3,
      name: "Todo App",
      src: todo,
      demo:"https://todoappbysouvik.netlify.app"
    },
    {
      id: 4,
      name: "YouTube",
      src: youtube,
      demo:"https://youtubeclone-eight-delta.vercel.app/"
    },
    {
      id: 5,
      name: "E-commerce App",
      src: amazon,
      demo:"https://amazon-clone-by-souvik.vercel.app/"
    },
    {
      id: 6,
      name: "Movie Search App",
      src: tmdb,
      demo:"https://tmdb-clone-by-souvik.vercel.app/"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-16 md:pt-36"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.reverse().map(({ id, name, src, demo }) => (
            <div
              key={id}
              className=" border-2 shadow-md h-[290px] overflow-hidden  shadow-gray-600 rounded-lg"
            >
              <h1 className=" text-center p-1">{name}</h1>
              <img
                src={src}
                alt=""
                className="object-cover h-48 w-96 rounded-md mx-auto duration-200 hover:scale-105"
              />

              <div className="flex items-center gap-2 justify-center">
                <a href={demo} target="_blank" className=" text-center ml-3 mt-2 border-[0.5px] w-1/2 px-2 py-1 rounded-2xl duration-200 hover:scale-105">
                <button>
                  Demo &#8599;
                </button>
                </a>
               <a href="" className=" text-center w-1/2 border-[0.5px] mt-2 mr-3 px-2 py-1 rounded-2xl duration-200 hover:scale-105">
               <button >
                  Code
                </button>
               </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
