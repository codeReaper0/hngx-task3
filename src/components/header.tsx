"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-[2px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] stroke-[2] stroke-[rgb(232,232,232/0.20)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Link href="" className="flex gap-4 items-center">
          <Image
            src="/assets/images/logo.png"
            width={120}
            height={120}
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
}
