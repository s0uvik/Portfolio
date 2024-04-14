import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setformData] = useState({
    user_name: "",
    user_email: "",
    user_mobile: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7xxc8bc",
        "template_283hu72",
        form.current,
        "DPWKIizwpXbGrapQc"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something Went Wrong");
        }
      );

    setformData({
      user_name: "",
      user_email: "",
      user_mobile: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#04152D] p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center ">
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-2 w-full md:w-1/2 bg-[#23272F] p-6 mb-6 rounded-lg"
          >
            <input
              type="text"
              required
              value={formData.user_name}
              onChange={handleChange}
              name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              required
              value={formData.user_email}
              onChange={handleChange}
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="number"
              required
              value={formData.user_mobile}
              onChange={handleChange}
              name="user_mobile"
              placeholder="Enter your mobile number"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              value={form.message}
              onChange={handleChange}
              name="message"
              placeholder="message..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
            value="Send"
            type="submit"
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
