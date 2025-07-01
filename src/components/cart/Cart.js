"use client";

import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";

export default function Cart({ isOpen, onClose }) {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      position="right"
      className="px-0 py-0"
    >
      <DrawerHeader
        title="Shopping Cart"
        className="px-3 bg-white pt-4 text-black"
      />
      <DrawerItems>
        <div className="flex flex-col h-screen justify-between bg-white">
          <div className="flex-grow flex flex-col justify-center items-center px-5 py-8 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
              <svg
                stroke="currentColor"
                fill="#10B981"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-700 text-lg">
              Your cart is empty
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              No items added to your cart. Please add some products.
            </p>
          </div>
          <div className="px-3 py-5">
            <button className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium flex justify-between items-center">
              <span>Proceed To Checkout</span>
              <span className="bg-white text-emerald-600 px-3 py-2 rounded-lg font-bold">
                $0.00
              </span>
            </button>
          </div>
        </div>
      </DrawerItems>
    </Drawer>
  );
}
