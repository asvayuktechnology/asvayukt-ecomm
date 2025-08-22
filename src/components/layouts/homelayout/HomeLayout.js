import Footer from "../footer/Footer";
import Header from "../header/Header";

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
