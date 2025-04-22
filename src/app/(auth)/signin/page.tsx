import SignInPage from "@/views/SignInPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ورود",
};

function SignIn() {
  return <SignInPage />;
}

export default SignIn;
