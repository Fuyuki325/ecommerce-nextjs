import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-cover bg-center bg-[url('https://res.cloudinary.com/dlm0ieiyt/image/upload/v1724509796/ecommerce-carrefour/register_d8djpt.png')] lg:flex"></div>
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
