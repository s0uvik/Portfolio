import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/s0uvik/",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/s0uvik",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "souviksarkar260123@gmail.com",
    },
    {
      id: 4,
      child: <FaWhatsapp size={30} />,
      href: "https://wa.me/917029835504",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-1 fixed">
        <ul>
          {links.map(({ id, name, child, href }) => (
            <li
              key={id}
              className="flex justify-between items-center cursor-pointer mt-2 w-14 h-14 px-4 rounded-lg hover:scale-110 duration-300 bg-gray-500"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className=" bg-slate-800">
        <ul className=" flex justify-around">
          {links.map(({ id, child, href }) => (
            <li key={id}>
              <a
                href={href}
                className=" sm:hidden flex justify-between items-center w-full p-6 text-back"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
