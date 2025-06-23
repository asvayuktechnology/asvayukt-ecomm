"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeaturedCategories from "./FeaturedCategories";
import ProductCard from "../productsInfo/ProductCard";
import BannerCarousel from "../ui/common/carousel/BannerCarousel";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = `https://fakestoreapi.com/products`;
    try {
      fetch(api)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <section className="bannerwrapper bg-white">
        <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full hidden lg:flex">
            <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5 rounded-lg overflow-hidden">
              <BannerCarousel />
            </div>
            <div className="w-full group">
              <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                  <h3 className="text-base  font-medium">
                    Latest Super Discount Active Coupon Code
                  </h3>
                </div>

                <div className="overflow-hidden">
                  <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                    <div className="tengah py-2 px-3 flex items-center justify-items-start">
                      <figure>
                        <img
                          alt="August Gift Voucher"
                          width={100}
                          height={100}
                          className="rounded-lg"
                          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=128&q=75"
                        />
                      </figure>
                      <div className="ml-3">
                        <div className="flex items-center ">
                          <h6 className="pl-1 text-base font-medium text-gray-600">
                            <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                              50%
                            </span>{" "}
                            Off
                          </h6>
                          <div className="ml-2">
                            <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100">
                              Inactive
                            </span>
                          </div>
                        </div>
                        <h2 className="pl-1  text-base text-gray-700 leading-6 font-semibold mb-2">
                          August Gift Voucher
                        </h2>
                        <span className="inline-block mb-2">
                          <div className="flex items-center font-semibold">
                            {["00", "00", "00", "00"].map((item, index) => (
                              <span
                                key={index}
                                className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                      <div className="info flex items-center">
                        <div className="w-full">
                          <div className="block">
                            <div className=" border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                              <button className="block w-full">
                                <span className="uppercase  font-semibold text-sm leading-7 text-emerald-600">
                                  AUGUST24
                                </span>
                              </button>
                            </div>
                          </div>
                          <p className="text-xs leading-4 text-gray-500 mt-2">
                            * This coupon apply when shopping more than{" "}
                            <span className="font-bold">$2000</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                    <div className="tengah py-2 px-3 flex items-center justify-items-start">
                      <figure>
                        <img
                          alt="Summer Gift Voucher"
                          width={100}
                          height={100}
                          className="rounded-lg"
                          src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=128&q=75"
                        />
                      </figure>
                      <div className="ml-3">
                        <div className="flex items-center ">
                          <h6 className="pl-1 text-base font-medium text-gray-600">
                            <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                              10%
                            </span>{" "}
                            Off
                          </h6>
                          <div className="ml-2">
                            <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100">
                              Inactive
                            </span>
                          </div>
                        </div>
                        <h2 className="pl-1  text-base text-gray-700 leading-6 font-semibold mb-2">
                          Summer Gift Voucher
                        </h2>
                        <span className="inline-block mb-2">
                          <div className="flex items-center font-semibold">
                            {["00", "00", "00", "00"].map((item, index) => (
                              <span
                                key={index}
                                className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                      <div className="info flex items-center">
                        <div className="w-full">
                          <div className="block">
                            <div className=" border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                              <button className="block w-full">
                                <span className="uppercase  font-semibold text-sm leading-7 text-emerald-600">
                                  SUMMER24
                                </span>
                              </button>
                            </div>
                          </div>
                          <p className="text-xs leading-4 text-gray-500 mt-2">
                            * This coupon apply when shopping more than{" "}
                            <span className="font-bold">$1000</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className=" text-xl">
                  <span className="text-emerald-600 font-bold">
                    100% Natural Quality Organic Product
                  </span>{" "}
                </h1>
                <p className="text-gray-500">
                  See Our latest discounted products from here and get a special
                  discount product
                </p>
              </div>
              <a
                className="text-sm  font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
                href="/search?category=breakfast"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <FeaturedCategories />

        <div className="bg-gray-50">
          <div className=" lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold text-black">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {data.map((items) => (
                    <ProductCard
                      key={items.id}
                      title={items.title}
                      price={items.price}
                      stock={items.rating.count}
                      imageUrl={items.image || "/fallback.jpg"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block mx-auto max-w-screen-2xl">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
              <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  {/* Text Section */}
                  <div className="lg:w-3/5">
                    <span className="text-base lg:text-lg text-black">
                      Organic Products and Food
                    </span>
                    <h2 className=" text-lg lg:text-2xl font-bold mb-1 text-black">
                      Quick Delivery to Your Home
                    </h2>
                    <p className="text-sm font-sans leading-6 text-black">
                      There are many products you will find in our shop. Choose
                      your daily necessary product from our KachaBazar shop and
                      get some special offers. See our latest discounted
                      products and enjoy a special discount.
                    </p>
                    <Link
                      href="/#"
                      className="lg:w-1/3 text-xs  font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white"
                    >
                      Download App
                    </Link>
                  </div>

                  {/* Image Section */}
                  <div className="w-1/5 flex-grow hidden md:flex lg:justify-end">
                    <img
                      src="https://res.cloudinary.com/ahossain/image/upload/v1697688032/settings/delivery-boy_rluuoq.webp"
                      alt="Quick Delivery to Your Home"
                      width={373}
                      height={250}
                      className="block w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className=" lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2  font-semibold text-black">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {data.map((items) => (
                    <ProductCard
                      key={items.id}
                      title={items.title}
                      price={items.price}
                      stock={items.rating.count}
                      imageUrl={items.image || "/fallback.jpg"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div
            id="downloadApp"
            className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden"
          >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
                <div className="hidden md:flex lg:justify-start">
                  <Image
                    src="https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img-left_s5n2zf.webp"
                    alt="app download"
                    width={500}
                    height={394}
                    className="w-auto"
                    priority
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-3 text-black">
                    Get Your Daily Needs From Our KachaBazar Store
                  </h3>
                  <p className="text-base opacity-90 leading-7 text-black">
                    There are many products you will find in our shop. Choose
                    your daily necessary product from our KachaBazar shop and
                    get some special offers.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2"
                    >
                      <Image
                        src="https://res.cloudinary.com/ahossain/image/upload/v1697688165/settings/app-store_cyyc0f.svg"
                        alt="app store"
                        className="h-auto"
                        width="350"
                        height="350"
                      />
                    </Link>
                    <Link
                      href="https://play.google.com/store/games"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="https://res.cloudinary.com/ahossain/image/upload/v1697688167/settings/play-store_cavwua.svg"
                        alt="play store"
                        className="h-auto"
                        width="350"
                        height="350"
                      />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex lg:justify-end">
                  <Image
                    src="https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img_c7xqg4.webp"
                    alt="app download"
                    width={500}
                    height={394}
                    className="w-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
