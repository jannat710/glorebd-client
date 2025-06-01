import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
