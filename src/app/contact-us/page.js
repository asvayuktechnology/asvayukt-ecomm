"use client";
import HomeLayout from "@/components/layouts/homelayout/HomeLayout";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiUser, FiMapPin } from "react-icons/fi";
import contactImg from "../../../public/images/contact-us.png"

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <HomeLayout>
        <div
          className="bannerbg flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom"
        >
          <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
            <div className="w-full flex justify-center flex-col relative">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-serif text-center text-black">
                Contact Us
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                  <FiMail />
                </span>
                <h5 className="text-xl mb-2 font-bold text-black">Email Us</h5>
                <p className="mb-0 text-base opacity-90 leading-7  text-black">
                  <a
                    href="mailto:info@kachabazar.com"
                    className="text-emerald-500"
                  >
                    info@kachabazar.com
                  </a>{" "}
                  Interactively grow empowered for process-centric total
                  linkage.
                </p>
              </div>

              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                  <FiUser />
                </span>
                <h5 className="text-xl mb-2 font-bold  text-black">Call Us</h5>
                <p className="mb-0 text-base opacity-90 leading-7  text-black">
                  <a href="tel:029-00124667" className="text-emerald-500">
                    029-00124667
                  </a>{" "}
                  Distinctively disseminate focused solutions clicks-and-mortar
                  ministate.
                </p>
              </div>

              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                  <FiMapPin />
                </span>
                <h5 className="text-xl mb-2 font-bold  text-black">Location</h5>
                <p className="mb-0 text-base opacity-90 leading-7  text-black">
                  <span>
                    Boho One, Bridge Street West, Middlesbrough, North
                    Yorkshire, TS2 1AE.
                  </span>
                  <br />
                  561-4535 Nulla LA <br />
                  United States 96522.
                </p>
              </div>
            </div>

            <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
              <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
                <Image
                  alt="Contact Illustration"
                  src={contactImg}
                  width={874}
                  height={874}
                  className="block w-auto"
                  priority
                />
              </div>

              <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
                <form
                  onSubmit={handleSubmit}
                  className="w-full mx-auto flex flex-col justify-center"
                >
                  <div className="mb-12">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3 text-black">
                      For any support just send your query
                    </h3>
                    <p className="text-base opacity-90 leading-7  text-black">
                      Collaboratively promote client-focused convergence
                      vis-a-vis customer-directed alignments via strategic users
                      and standardized infrastructures.
                    </p>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                      <div className="w-full md:w-1/2">
                        <label className="block text-gray-500 font-medium text-sm mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter Your Name"
                          className="py-2 px-4 w-full border text-sm rounded-md focus:outline-none focus:border-emerald-500 h-11"
                        />
                      </div>
                      <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5">
                        <label className="block text-gray-500 font-medium text-sm mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email"
                          className="py-2 px-4 w-full border text-sm rounded-md focus:outline-none focus:border-emerald-500 h-11"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-500 font-medium text-sm mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter Your Subject"
                        className="py-2 px-4 w-full border text-sm rounded-md focus:outline-none focus:border-emerald-500 h-11"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-500 font-medium text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Write your message here"
                        className="px-4 py-3 w-full border rounded-md text-sm focus:outline-none focus:border-gray-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm lg:text-base px-5 md:px-6 lg:px-8 py-3 md:py-3.5 rounded-md w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default page;
