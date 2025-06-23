"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, ModalBody } from "flowbite-react";

const ProductModalCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <>
      <Button onClick={() => setOpenModal(true)}> Toggle modal</Button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        dismissible
        size="5xl"
      >
        <ModalBody className="p-0">
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-2xl overflow-hidden">
            <Link
              href="/product/premium-t-shirt"
              className="flex items-center justify-center bg-white"
            >
              <Image
                alt="product"
                width={420}
                height={420}
                src="https://res.cloudinary.com/ahossain/image/upload/v1738768427/product/CMTHP-COR12-black-920x920-removebg-preview.png"
                className="object-contain"
              />
            </Link>

            <div className="w-full p-5 md:p-8 text-left">
              <div className="mb-2 -mt-1.5">
                <Link href="/product/premium-t-shirt">
                  <h1 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif text-black cursor-pointer">
                    Premium T-Shirt
                  </h1>
                </Link>
                <div className="mt-2">
                  <span className="bg-green-100 text-green-500 rounded-full inline-flex items-center px-2 py-0 text-xs font-semibold font-serif">
                    Stock:
                    <span className="text-orange-700 pl-1 font-bold">550</span>
                  </span>
                </div>
              </div>

              <p className="text-sm leading-6 text-gray-500">
                A T-shirt (also spelled tee-shirt or tee shirt), or tee for
                short, is a style of fabric shirt named after the T shape of its
                body and sleeves. Traditionally, it has short sleeves and a
                round neckline, known as a crew neck, which lacks a collar.
              </p>

              <div className="my-4 font-serif font-bold text-2xl text-black">
                $450.00
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-serif text-gray-700 font-bold">
                  Color:
                </h4>
                <select className="w-3/4 px-2 py-1 bg-gray-100 rounded-md h-10 text-sm my-2 text-black">
                  <option hidden value="red">
                    Red
                  </option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </select>

                <h4 className="text-sm font-serif text-gray-700 font-bold mt-2">
                  Size:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
                  {["Small", "Medium", "Large"].map((size, idx) => (
                    <button
                      key={idx}
                      className={`${
                        size === "Small"
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      } rounded-full px-3 py-1 text-xs font-serif`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center border rounded-md overflow-hidden h-12 border-gray-900 text-black">
                  <button
                    onClick={handleDecrement}
                    className="w-8 md:w-12 border-e border-gray-900 hover:text-gray-500"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <p className="w-8 md:w-20 text-base text-center">
                    {quantity}
                  </p>
                  <button
                    onClick={handleIncrement}
                    className="w-8 md:w-12 border-s border-gray-900 hover:text-gray-500"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                <button className="text-sm font-semibold font-serif text-white bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-md w-full h-12">
                  Add to Cart
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between mt-4 gap-3">
                <div>
                  <p className="font-serif font-semibold text-sm">
                    <span className="text-gray-700">Category:</span>
                    <Link href="/search?category=men&_id=632ab2b64d87ff2494210aa7">
                      <button className="text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600">
                        men
                      </button>
                    </Link>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["premium-shirt", "t-shirt", "new-t-shirt"].map(
                      (tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-50 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold font-serif"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <button className="font-sans font-medium text-sm text-orange-500 mt-2 sm:mt-0">
                  More Info
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-4 text-right">
                Call Us To Order By Mobile Number:{" "}
                <span className="text-emerald-700 font-semibold">
                  +0044235234
                </span>
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProductModalCard;
