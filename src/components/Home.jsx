import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/resume/Resume.pdf";

const Home = () => {
  return (
    <div name="home" className="w-full bg-[#04152D]">
      <div className="  max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="  flex flex-col justify-center mb-10 sm:pt-6 mt-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className=" text-gray-400 py-4 max-w-md">
            Technologies:- JavaScript, React, Typescript, GraphQL, Jest,
            Tailwind Css <br />
            Also interested in:- Blogging, Web Security, Wordpress
          </p>

          <div className=" flex gap-2">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume &#8595;
            </a>
          </div>
        </div>

        <div className=" md:mt-40">
          <img
            style={{ "box-shadow": "0px 9px 130px 10px steelblue" }}
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl rounded-tr-[20%] rounded-bl-[20%] mx-auto w-2/3 md:w-full hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
