import React from "react";
import colage from "../assets/portfolio/college.png";
import textUtils from "../assets/portfolio/textutils.png";
import todo from "../assets/portfolio/todo.png";
import bank from "../assets/portfolio/bank.png";
import countriesData from "../assets/portfolio/countries data.png";
import calculator from "../assets/portfolio/calculator.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: colage,
      demo:"https://uitbu.netlify.app"
    },
    {
      id: 2,
      src: textUtils,
      demo:"https://myreacttextutils.netlify.app"
    },
    {
      id: 3,
      src: todo,
      demo:"https://todoappbysouvik.netlify.app"
    },
    {
      id: 4,
      src: bank,
      demo:"https://bankists-app.netlify.app"
    },
    {
      id: 5,
      src: countriesData,
      demo:"https://get-countries-data-souvik.netlify.app"
    },
    {
      id: 6,
      src: calculator,
      demo:""
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo }) => (
            <div
              key={id}
              className=" border-2 shadow-md h-[250px] overflow-hidden  shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="object-contain h-48 w-96 rounded-md mx-auto duration-200 hover:scale-105"
              />

              <div className="flex items-center gap-2 justify-center">
                <a href={demo} target="_blank" className=" text-center ml-3 mt-2 border-[0.5px] w-1/2 px-2 py-1 rounded-2xl duration-200 hover:scale-105">
                <button>
                  Demo
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
