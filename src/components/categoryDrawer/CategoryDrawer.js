"use client";

import Link from "next/link";
import { Drawer, DrawerHeader } from "flowbite-react";
import {
  MdArrowRightAlt,
  MdOutlineLocalOffer,
  MdOutlinePhoneCallback,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiFileMinus, FiUsers } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

import manPerfumes from "../../../public/images/categories/manPerfumes.jpg";
import gocha from "../../../public/images/categories/placeholder.png";
import cabbage from "../../../public/images/categories/cabbage_n59uv3.png";
import fryingPan from "../../../public/images/categories/frying-pan_vglm5c.png";
import spray_pebsjt from "../../../public/images/categories/spray_pebsjt.png";
import cat_tznwmq from "../../../public/images/categories/cat_tznwmq.png";
import beauty_vfbmzc from "../../../public/images/categories/beauty_vfbmzc.png";
import strawberryjam from "../../../public/images/categories/strawberry-jam-1.png";
import milk_dcl0dr from "../../../public/images/categories/milk_dcl0dr.png";
import juice_p5gv5k from "../../../public/images/categories/juice_p5gv5k.png";
import bagel_mt3fod from "../../../public/images/categories/bagel_mt3fod.png";
import Image from "next/image";

const categories = [
  { name: "Men Perfumes", image: manPerfumes, href: "/" },
  { name: "Gocha", image: gocha, href: "/" },
  { name: "Fish & Meat", image: cat_tznwmq, href: "/" },
  { name: "Fruits & Vegetable", image: cabbage, href: "/" },
  { name: "Cooking Essentials", image: fryingPan, href: "/" },
  { name: "Biscuits & Cakes", image: bagel_mt3fod, href: "/" },
  { name: "Household Tools", image: spray_pebsjt, href: "/" },
  { name: "Beauty & Healths", image: beauty_vfbmzc, href: "/" },
  { name: "Jam & Jelly", image: strawberryjam, href: "/" },
  { name: "Milk & Dairy", image: milk_dcl0dr, href: "/" },
  { name: "Drinks", image: juice_p5gv5k, href: "/" },
  { name: "Breakfast", image: bagel_mt3fod, href: "/" },
];

const pages = [
  { href: "/offer", label: "Offer Page", icons: <MdOutlineLocalOffer /> },
  { href: "/checkout", label: "Checkout", icons: <IoBagCheckOutline /> },
  { href: "/faq", label: "FAQ", icons: <AiOutlineQuestionCircle /> },
  { href: "/about-us", label: "About Us", icons: <FiUsers /> },
  {
    href: "/contact-us",
    label: "Contact Us",
    icons: <MdOutlinePhoneCallback />,
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    icons: <MdOutlinePrivacyTip />,
  },
  {
    href: "/terms-and-conditions",
    label: "Terms & Conditions",
    icons: <FiFileMinus />,
  },
  {
    href: "/404",
    label: "404 Not Found",
    icons: <HiOutlineExclamationCircle />,
  },
];

export default function CategoryDrawer({ open, onClose }) {
  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        position="left"
        className="lg:w-[450px] md:w-[350px] w-[100%] px-0 py-0"
      >
        <DrawerHeader
          title="Categories"
          className="px-3 bg-white pt-4 text-black"
        />

        <div className="overflow-y-auto bg-white">
          <div className="border-b px-4 py-2 font-semibold">All Categories</div>
          <div className="px-4 py-2 space-y-2">
            {categories.map((categorie, index) => (
              <Link
                key={index}
                className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                href={categorie.href || "#"}
              >
                <Image
                  src={categorie.image}
                  alt={categorie.name}
                  width={18}
                  height={18}
                  className="rounded-sm"
                />
                <span className="ml-3 text-sm font-medium flex-1">
                  {categorie.name}
                </span>
                <MdArrowRightAlt />
              </Link>
            ))}
          </div>

          <div className="border-b px-4 py-2 mt-4 font-semibold">Pages</div>
          <div className="px-4 py-2 space-y-2">
            {pages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="flex items-center gap-2 px-2 py-1 text-sm text-gray-700 rounded hover:bg-gray-100 hover:text-emerald-600"
              >
                <div>{page.icons}</div>
                <div>{page.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}
