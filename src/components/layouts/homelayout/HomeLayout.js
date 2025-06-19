import React from "react";
import Footer from "@/components/footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div>header</div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
