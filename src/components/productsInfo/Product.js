"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuantityCounter from "../quantityCounter/QuantityCounter";

const Product = () => {
  const infoList = [
    {
      text: "Free shipping applies to all orders over shipping €100",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      text: "Home Delivery within 1 Hour",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      text: "Cash on Delivery Available",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      text: "7 Days returns money back guarantee",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      ),
    },
    {
      text: "Warranty not available for this item",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
          <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ),
    },
    {
      text: "Guaranteed 100% organic from natural products.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
    },
    {
      text: "Delivery from our pick point Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="px-0 py-10 lg:py-10">
        <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
          {/* Breadcrumb */}
          <div className="flex items-center pb-4">
            <ol className="flex items-center w-full overflow-hidden font-serif">
              <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="text-sm mt-[1px] ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </li>
              <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold text-black">
                <Link href="/">
                  <button type="button">skin-care</button>
                </Link>
              </li>
              <li className="text-sm mt-[1px] text-black">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </li>
              <li className="text-sm px-1 transition duration-200 ease-in text-black">
                Himalaya Powder
              </li>
            </ol>
          </div>

          {/* Product Section */}
          <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12 relative">
                <span className="absolute text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-0 top-4">
                  8.56% Off
                </span>
                <Image
                  alt="product"
                  width={650}
                  height={650}
                  priority
                  src="https://res.cloudinary.com/ahossain/image/upload/v1738768685/product/Himalaya-Baby-Powder-100g-removebg-preview.png"
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-2/3 w-full md:pr-6">
                <div className="mb-6">
                  <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                    Himalaya Powder
                  </h1>
                  <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                    SKU : <span className="font-bold text-gray-600"></span>
                  </p>
                  <div className="relative">
                    <span className="bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold font-serif">
                      Stock :
                      <span className="text-orange-700 pl-1 font-bold">
                        5472
                      </span>
                    </span>
                  </div>
                </div>

                <div className="font-serif font-bold text-2xl">
                  $160.00{" "}
                  <del className="text-lg font-normal text-gray-400 ml-1">
                    $174.97
                  </del>
                </div>

                <div className="text-sm leading-6 text-gray-500 md:leading-7 mt-4">
                  Baby Products are products intended to be used on infants and
                  category under the age of three. Baby products are specially
                  formulated to be mild and non-irritating and use ingredients
                  that are selected for these properties. Baby products include
                  baby shampoos and baby lotions, oils, powders and creams.
                  <br />
                  <span className="read-or-hide">Show Less</span>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center mt-4">
                  <div className="flex items-center justify-between w-full space-x-3 sm:space-x-4">
                    <QuantityCounter />
                    <button className="bg-gray-800 text-white text-sm leading-4 font-semibold px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full h-12 rounded-md hover:bg-gray-900">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-col mt-4">
                  <span className="font-serif font-semibold py-1 text-sm">
                    <span className="text-gray-800">Category:</span>
                    <Link href="/search?category=skin-care&_id=632ab2f04d87ff2494210ad0">
                      <button className="text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600">
                        skin-care
                      </button>
                    </Link>
                  </span>
                  <div className="flex flex-row">
                    <span className="bg-gray-50 mr-2 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif mt-2">
                      baby care
                    </span>
                    <span className="bg-gray-50 mr-2 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif mt-2">
                      baby accessories
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-8 text-xs sm:text-sm text-gray-700 font-medium">
                  Call Us To Order By Mobile Number :
                  <span className="text-emerald-700 font-semibold">
                    {" "}
                    +0044235234
                  </span>
                </div>

                {/* Social */}
                <div className="mt-2">
                  <h3 className="text-base font-semibold mb-1 font-serif">
                    Share your social network
                  </h3>
                  <p className="text-sm text-gray-500">
                    For lots of traffic from social network, share this product
                  </p>
                  {/* Social Icons Placeholder */}
                </div>
              </div>
              <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                <div className="mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-8 rounded-lg">
                  <ul className="my-0 space-y-3">
                    {infoList.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-4 py-2">
                        <span className="text-gray-400 text-xl">
                          {item.icon}
                        </span>
                        <p className="text-sm text-gray-500 font-sans leading-5">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
