import HomeLayout from "@/components/layouts/homelayout/HomeLayout";
import Product from "@/components/productsInfo/Product";
import React from "react";

const page = () => {
  return (
    <>
      <HomeLayout>
        <Product />
      </HomeLayout>
    </>
  );
};

export default page;
