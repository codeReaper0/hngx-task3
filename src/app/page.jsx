"use client";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
// import {AuthImageGallery} from "@/components/authGallery";
import AuthGallery from "@/components/protectedGallery";
import {auth} from "@/lib/firebase.utils";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";

export default function Home() {
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

  return (
    <>
      <Header />
      <main className="p-4">
        {/* <AuthImageGallery /> */}
        {user ? <AuthGallery /> : <Gallery />}
      </main>
    </>
  );
}
