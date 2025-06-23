"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ title, price, stock, imageUrl }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalPlacement, setModalPlacement] = useState("center");
  return (
    <>
      <div className="group box-border overflow-hidden flex rounded-md pe-0 flex-col items-center bg-white relative">
        <div className="w-full flex justify-between">
          <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
            Stock :
            <span className="text-orange-700 pl-1 font-bold">{stock}</span>
          </span>
        </div>

        <div className="relative flex justify-center cursor-pointer pt-2 w-full h-44">
          <div
            className="relative w-full h-full p-2 flex items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            <img
              alt={title}
              src={imageUrl}
              className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2 w-25 "
              sizes="100%"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2n text-wrap">{title}</span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <div className=" product-price font-bold">
              <span className="inline-block text-lg font-semibold text-gray-800">
                ${price}
              </span>
            </div>

            <button
              aria-label="cart"
              className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
            >
              <span className="text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
      >
        <ModalBody>
          <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
              <Link href="/product/premium-t-shirt">
                <div className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer">
                  <Image
                    alt="product"
                    width={420}
                    height={420}
                    src="https://res.cloudinary.com/ahossain/image/upload/v1738768427/product/CMTHP-COR12-black-920x920-removebg-preview.png"
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="w-full flex flex-col p-5 md:p-8 text-left">
                <div className="mb-2 md:mb-2.5 block -mt-1.5">
                  <Link href="/product/premium-t-shirt">
                    <h1 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold  hover:text-black cursor-pointer">
                      Premium T-Shirt
                    </h1>
                  </Link>
                  <div className="relative">
                    <span className="bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold ">
                      Stock :
                      <span className="text-orange-700 pl-1 font-bold">
                        550
                      </span>
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-6 text-gray-500 md:leading-6">
                  A T-shirt (also spelled tee-shirt or tee shirt), or tee for
                  short, is a style of fabric shirt named after the T shape...
                </p>

                <div className="flex items-center my-4">
                  <div className=" product-price font-bold">
                    <span className="inline-block text-2xl">$450.00</span>
                  </div>
                </div>

                <div className="mb-1">
                  <h4 className="text-sm py-1  text-gray-700 font-bold">
                    Color:
                  </h4>
                  <select className="focus:shadow-none w-3/4 px-2 py-1 form-select outline-none h-10 text-sm block rounded-md bg-gray-100 border-transparent focus:bg-white border-emerald-600 focus:border-emerald-400">
                    <option hidden>Red</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                  </select>

                  <h4 className="text-sm py-1  text-gray-700 font-bold">
                    Size:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {["Small", "Medium", "Large"].map((size, idx) => (
                      <button
                        key={idx}
                        className={`${
                          size === "Small"
                            ? "bg-emerald-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        } mr-2 border-0 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs  mt-2`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                    <div className="group flex items-center justify-between rounded-md border h-11 md:h-12 border-gray-300">
                      <button
                        disabled
                        className="w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                      <p className="font-semibold w-8 md:w-20 xl:w-24 text-base text-heading">
                        1
                      </p>
                      <button className="w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
                    <button className="text-sm font-semibold  text-white bg-emerald-500 hover:bg-emerald-600 px-4 ml-4 md:px-6 lg:px-8 py-4 w-full h-12">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                    <div>
                      <span className=" font-semibold text-sm">
                        <span className="text-gray-700">Category:</span>
                        <Link href="/search?category=men&_id=632ab2b64d87ff2494210aa7">
                          <button className="text-gray-600  font-medium underline ml-2 hover:text-teal-600">
                            men
                          </button>
                        </Link>
                      </span>
                      <div className="flex flex-row">
                        {["premium-shirt", "t-shirt", "new-t-shirt"].map(
                          (tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-50 mr-2 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold  mt-2"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <button className="font-sans font-medium text-sm text-orange-500">
                      More Info
                    </button>
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Call Us To Order By Mobile Number :{" "}
                    <span className="text-emerald-700 font-semibold">
                      +0044235234
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal> */}
    </>
  );
}
