import React from "react";
import Header from "@/components/modules/header/index";
import MobileButton from "@/components/custom/MobileButton";
import Footer from "@/components/modules/footer/index"


interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children } : layoutProps) => {
  return (
    <>
      <Header />
      <MobileButton />
      {children}
      <Footer />
    </>
  );
};

export default layout;
