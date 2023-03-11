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

        <p className="text-xl sm:mt-20">
          Hi, my name is Souvik and I'm a highly skilled web developer with over
          3 years of experience in HTML, CSS, JavaScript, React, Figma,
          Bootstrap, and Firebase. I have a strong passion for creating
          user-friendly and visually appealing websites that are both functional
          and efficient. I have an eye for design and enjoy implementing the
          latest trends in web development. My proficiency in front-end web
          development allows me to build seamless web experiences that are
          optimized for desktop and mobile devices.
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
