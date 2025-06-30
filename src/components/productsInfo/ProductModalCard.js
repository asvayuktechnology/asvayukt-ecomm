"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, ModalBody } from "flowbite-react";
import QuantityCounter from "../quantityCounter/QuantityCounter";

const ProductModalCard = () => {
  const [openModal, setOpenModal] = useState(false);

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

                <div className="font-serif font-bold text-2xl text-black">
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
                <div className="mt-8 text-xs sm:text-sm text-gray-700 font-medium flex justify-between">
                  <div>
                    Call Us To Order By Mobile Number :
                    <span className="text-emerald-700 font-semibold">
                      {" "}
                      +0044235234
                    </span>
                  </div>
                  <div>
                    <Link
                      href="/single-product"
                      className="text-orange-400 font-bold"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProductModalCard;
