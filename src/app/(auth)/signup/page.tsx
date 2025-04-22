import SignUpPage from "@/views/SignUpPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ثبت نام",
};

function SignUp() {
  return <SignUpPage />;
}

export default SignUp;
