"use client";
import Image from "next/image";
import React, {useState} from "react";
import {CardLoader} from "@/components/loader/cardLoader";

const images = [
  {id: 1, tag: "nature", src: "/assets/images/img1.jpg"},
  {id: 2, tag: "camping", src: "/assets/images/img2.jpg"},
  {id: 3, tag: "highway", src: "/assets/images/img3.jpg"},
  {id: 4, tag: "nature", src: "/assets/images/img4.jpg"},
  {id: 5, tag: "fashion", src: "/assets/images/img5.jpg"},
  {id: 6, tag: "picnic", src: "/assets/images/img6.jpg"},
  {id: 7, tag: "adventure", src: "/assets/images/img7.jpg"},
  {id: 8, tag: "science", src: "/assets/images/img8.jpg"},
  {id: 9, tag: "fashion", src: "/assets/images/img9.jpg"},
  {id: 10, tag: "food", src: "/assets/images/img10.jpg"},
  {id: 11, tag: "picnic", src: "/assets/images/img11.jpg"},
  {id: 12, tag: "car", src: "/assets/images/img12.jpg"},
];

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchInputChange = (event: any) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Function to filter images based on the search term
  const filteredImages = images.filter((image) =>
    image.tag.toLowerCase().includes(searchTerm)
  );

  return loading ? (
    <CardLoader itemCount={12} />
  ) : (
    <div className="max-w-7xl mx-auto ">
      <input
        type="text"
        placeholder="Search by tag..."
        value={searchTerm}
        onChange={handleSearchInputChange}
        className="block w-full px-4 py-2 mt-4 mb-2 border border-gray rounded-md focus:ring focus:ring-blue-200"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image) => {
          return (
            <div key={image.id} className="relative rounded-lg overflow-hidden">
              <Image
                src={image.src}
                width={600}
                height={600}
                alt="Gallery Image"
                className="object-cover object-center w-auto h-full"
              />
              <p className="py-1 px-2 rounded absolute top-4 left-4 bg-red-500/80 text-white text-sm">
                {image.tag}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
