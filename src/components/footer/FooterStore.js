import React from "react";
import Link from "next/link";
import Image from "next/image";
import googleApp from "../../../public/images/footer-img/googleApp.png"
import googlePlay from "../../../public/images/footer-img/googlePlay.png"
import playStoreLogo from "../../../public/images/footer-img/playStoreLogo.svg"
import appStoreLogo from "../../../public/images/footer-img/appStoreLogo.svg"

const FooterStore = () => {
  return (
    <>
      <div className="w-full">
        <div
          id="downloadApp"
          className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden"
        >
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
              <div className="hidden md:flex lg:justify-start">
                <Image
                  src={googleApp}
                  alt="app download"
                  width={500}
                  height={394}
                  className="w-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3 text-black">
                  Get Your Daily Needs From Our KachaBazar Store
                </h3>
                <p className="text-base opacity-90 leading-7 text-black">
                  There are many products you will find in our shop. Choose your
                  daily necessary product from our KachaBazar shop and get some
                  special offers.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                  >
                    <Image
                      src={appStoreLogo}
                      alt="app store"
                      className="h-auto"
                      width="350"
                      height="350"
                    />
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={playStoreLogo}
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
                  src={googlePlay}
                  alt="app download"
                  width={500}
                  height={394}
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStore;
