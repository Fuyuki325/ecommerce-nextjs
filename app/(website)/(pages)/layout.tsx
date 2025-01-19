import React from "react";
import Header from "@/components/modules/header/index";
import MobileBottom from "@/components/custom/MobileBottom";
import Footer from "@/components/modules/footer/index"


interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children } : layoutProps) => {
  return (
    <>
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </>
  );
};

export default layout;
