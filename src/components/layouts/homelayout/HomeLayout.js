import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
