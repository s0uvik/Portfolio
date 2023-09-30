import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-justify sm:mt-20">
          As a front-end developer, I specialize in building user-friendly and
          visually appealing websites and applications. With expertise in:- -
          HTML - CSS - JavaScript, - React - Typescript - Tailwind CSS My
          passion for coding and problem-solving drives me to continuously learn
          and stay up-to-date with the latest front-end technologies. I am a
          collaborative team player who enjoys working with designers,
          developers, and stakeholders to deliver exceptional user experiences.
        </p>

        <br />

        {/* <p className="text-xl">
          My experience in working with Agile methodologies has allowed me to
          manage complex projects with ease. I have worked on a variety of
          projects including e-commerce websites, social media platforms, and
          web applications. I am confident that I have the skills and expertise
          required to bring your project to life. If you're looking for a
          skilled and dedicated web developer, please don't hesitate to contact
          me. I'm looking forward to working with you! less
        </p> */}
      </div>
    </div>
  );
};

export default About;
