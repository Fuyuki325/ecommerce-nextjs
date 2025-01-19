import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="" href="/">
      <Image
        alt="logo"
        width={100}
        height={100}
        src="/assets/images/next.svg"
        priority
      />
    </Link>
  );
};

export default Logo;
