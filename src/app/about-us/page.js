import HomeLayout from "@/components/layouts/homelayout/HomeLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const team = [
  {
    name: "Niamh Shea",
    role: "Co-founder & Executive",
    img: "https://res.cloudinary.com/ahossain/image/upload/v1697439688/settings/team-1_acjmv7.webp",
  },
  {
    name: "Orla Dwyer",
    role: "Orla Dwyer",
    img: "https://res.cloudinary.com/ahossain/image/upload/v1697439689/settings/team-2_dw7zs1.webp",
  },
  {
    name: "Danien James",
    role: "Co-founder, Chairman",
    img: "https://res.cloudinary.com/ahossain/image/upload/v1697439689/settings/team-3_ld3323.webp",
  },
  {
    name: "Dara Frazier",
    role: "Chief Strategy Officer",
    img: "https://res.cloudinary.com/ahossain/image/upload/v1697439689/settings/team-4_i7jvx7.webp",
  },
  {
    name: "Glenda Arvidson",
    role: "HR Officer",
    img: "https://res.cloudinary.com/ahossain/image/upload/v1697439689/settings/team-5_ylyklw.webp",
  },
  {
    name: "Melvin Davis",
    role: "Lead Developer",
    img: "https://res.cloudinary.com/ahossain/image/upload/v1697439689/settings/team-6_gmlts4.webp",
  },
];

const page = () => {
  return (
    <>
      <HomeLayout>
        <div
          className="bannerbg flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom"
        >
          <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
            <div className="w-full flex justify-center flex-col relative">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-serif text-center text-black">
                About Us
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
            <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
              <div>
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold text-black">
                  Welcome to our KachaBazar shop
                </h3>
                <div className="mt-3 text-base opacity-90 leading-7 text-black">
                  <p>
                    Holisticly seize parallel metrics and functional
                    ROI.Seamlessly revolutionize error-free internal or organic
                    sources before effective scenarios. Progressively
                    incentivize state of the art applications for efficient
                    intellectual capital. Credibly leverage existing distinctive
                    mindshare through cutting-edge schemas. Proactively
                    procrastinate team building paradigms coordinate
                    client-centric total transparent internal. Dynamically
                    embrace diverse customer service and installed base
                    paradigms. Credibly seize enterprise-wide experiences for
                    end-to-end data. Professionally brand flexible alignments
                    and cost effective architectures. Enthusiastically
                    incentivize seamless communities with seamlessly facilitate
                    revolutionary metrics with strategic theme areas.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                  <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                      8K
                    </span>
                    <h4 className="text-lg font-serif font-bold mb-1 text-black">
                      Lovely Customer
                    </h4>
                    <p className="mb-0 opacity-90 leading-7 text-black">
                      Competently productize virtual models without performance.
                    </p>
                  </div>
                  <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                      10K
                    </span>
                    <h4 className="text-lg font-serif font-bold mb-1 text-black">
                      Listed Products
                    </h4>
                    <p className="mb-0 opacity-90 leading-7 text-black">
                      Dynamically morph team driven partnerships after vertical.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <Image
                  width={920}
                  height={750}
                  src="https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/v7g6gowiju0wanpwx70f.jpg"
                  alt="About Us Banner"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7 space-y-6 text-black">
              <p>
                Holisticly seize parallel metrics and functional ROI. Seamlessly
                revolutionize error-free internal or organic sources before
                effective scenarios. Progressively incentivize state of the art
                applications for efficient intellectual capital. Credibly
                leverage existing distinctive mindshare through cutting-edge
                schemas. Proactively procrastinate team building paradigms
                coordinate client-centric total transparent internal.
                Energistically reconceptualize global leadership for
                high-quality networks. Credibly restore an expanded array of
                systems rather than accurate results. Collaboratively synergize
                backend bandwidth without 24/7 functionalities. Credibly utilize
                proactive ideas whereas cross-media core competencies. Uniquely
                maximize professional best practices through resource maximizing
                services. Conveniently architect cross-unit web services for
                e-business imperatives.
              </p>
              <p>
                Appropriately visualize market-driven data before one-to-one
                scenarios. Collaboratively productize multifunctional ROI
                through intuitive supply chains. Enthusiastically seize
                revolutionary value and process-centric services. Competently
                harness intuitive information after interoperable markets.
                Interactively revolutionize future-proof value before granular
                sources. Dynamically embrace diverse customer service and
                installed base paradigms. Credibly seize enterprise-wide
                experiences for end-to-end data. Professionally brand flexible
                alignments and cost effective architectures. Enthusiastically
                incentivize seamless communities with seamlessly facilitate
                revolutionary metrics with strategic theme areas.
              </p>
            </div>

            <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
              <Image
                width={1920}
                height={570}
                src="https://res.cloudinary.com/ahossain/image/upload/v1697439195/settings/sl8vzvzm54jgzq6sphn2.jpg"
                alt="Promo Banner"
                className="block rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 lg:py-20 py-10">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
              <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                <div className="max-w-2xl">
                  <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold text-black">
                    Our Team
                  </h3>
                  <p className="mt-2 md:mt-3 font-normal block text-base text-black">
                    We’re impartial and independent, and every day we create
                    distinctive, world-class reintermediate backend supply
                    programmes.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
                {team.map((member, idx) => (
                  <div key={idx} className="max-w-sm">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={420}
                      height={420}
                      className="block rounded-lg"
                    />
                    <div className="py-4">
                      <h5 className="text-lg font-semibold font-serif text-black">
                        {member.name}
                      </h5>
                      <span className="opacity-75 text-sm text-black">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
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
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3 text-black">
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
      </HomeLayout>
    </>
  );
};

export default page;
