import React from "react";
import Link from "next/link";
import LoginForm from "@/components/auth/loginForm";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description: "Payflex app",
};

export default function Login() {
  return (
    <React.Fragment>
      <div className="bg-black lg:flex w-screen h-screen lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="bg-grey text-gray-600 overflow-auto max-w-7xl lg:max-w-md lg:rounded-xl w-full h-full lg:h-auto">
          <div className="w-full py-8 px-4 md:px-20 lg:px-10">
            <div className="text-center mb-10">
              <Link href="/">
                <Image
                  alt="Payflex"
                  src="/assets/images/logo.png"
                  width={130}
                  height={90}
                  className="w-auto h-auto mx-auto"
                />
              </Link>
            </div>
            <div className="">
              <LoginForm />
              <p className="text-ash text-center font-medium mt-4">
                Don&apos;t have an account?
                <Link
                  href="/auth/register"
                  className="text-white ml-1 underline hover:no-underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
