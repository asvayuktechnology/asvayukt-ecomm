import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomeLayout;
