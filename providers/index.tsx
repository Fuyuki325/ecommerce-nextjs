import React from "react";
import {
  ClerkProvider,
} from "@clerk/nextjs";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider
      // add custom style
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
            logoImageUrl: "/assets/images/next.svg",
          },
        }}

        // add redirect url
        afterSignOutUrl="/sign-in"
        afterSignInUrl="/account/dashboard"
        signInUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
        signUpUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
        signInFallbackRedirectUrl="/"
        signUpFallbackRedirectUrl="/"
      
      >{children}</ClerkProvider>
    </div>
  );
};

export default Providers;
