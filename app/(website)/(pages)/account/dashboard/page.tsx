import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      <UserButton />
      this is a protected page
      <SignOutButton />
    </div>
  );
};

export default page;
