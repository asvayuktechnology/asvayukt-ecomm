"use client";
import React from "react";

const QuantityCounter = ({ quantity, setQuantity }) => {
  return (
    <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-12 border-gray-300">
      {/* Decrease Button */}
      <button
        className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-12 text-heading border-e border-gray-300 hover:text-gray-500 text-black cursor-pointer"
        aria-label="Decrease quantity"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        <span className="text-dark sm:text-2xl">
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
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {/* Quantity Display */}
      <p className="font-semibold flex items-center justify-center transition-colors duration-250 ease-in-out flex-shrink-0 text-base text-heading w-10 md:w-20 xl:w-24 text-black cursor-text">
        {quantity}
      </p>

      {/* Increase Button */}
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500 text-black cursor-pointer"
        aria-label="Increase quantity"
      >
        <span className="text-dark sm:text-2xl">
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default QuantityCounter;
