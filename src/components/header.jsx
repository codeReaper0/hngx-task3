"use client";
import {signOutCurrentUser, auth} from "@/lib/firebase.utils";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {onAuthStateChanged} from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Clean up the observer when the component unmounts
    return () => checkAuth();
  }, []);

  const handleSignOut = () => {
    signOutCurrentUser();
    const response = signOutCurrentUser();
    toast.success("Logout successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  return (
    <header className="sticky top-0 z-30 bg-[#ff5656] backdrop-blur-[2px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] stroke-[2] stroke-[rgb(232,232,232/0.20)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6">
        <Link href="" className="flex gap-4 items-center">
          <Image
            src="/assets/images/logo.png"
            width={140}
            height={120}
            alt="logo"
          />
        </Link>
        {user ? (
          <button
            onClick={handleSignOut}
            className="py-2 px-4 rounded-md bg-black hover:bg-black/80 font-semibold transition-colors duration-300 ease-in-out text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/auth/login"
            className="py-2 px-4 rounded-md bg-black hover:bg-black/80 font-semibold transition-colors duration-300 ease-in-out text-white"
          >
            Login
          </Link>
        )}
      </div>
      <ToastContainer />
    </header>
  );
}
