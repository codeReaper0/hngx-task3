import Image from "next/image";
import React from "react";

const images = [
  {id: 1, tag: "", src: "/assets/images/img1.jpg"},
  {id: 2, tag: "", src: "/assets/images/img2.jpg"},
  {id: 3, tag: "", src: "/assets/images/img3.jpg"},
  {id: 4, tag: "", src: "/assets/images/img4.jpg"},
  {id: 5, tag: "", src: "/assets/images/img5.jpg"},
  {id: 6, tag: "", src: "/assets/images/img6.jpg"},
  {id: 7, tag: "", src: "/assets/images/img7.jpg"},
  {id: 8, tag: "", src: "/assets/images/img8.jpg"},
  {id: 9, tag: "", src: "/assets/images/img9.jpg"},
  {id: 10, tag: "", src: "/assets/images/img10.jpg"},
  {id: 11, tag: "", src: "/assets/images/img11.jpg"},
  {id: 12, tag: "", src: "/assets/images/img12.jpg"},
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 py-4">
      {images.map((image) => {
        return (
          <div key={image.id} className="rounded-lg overflow-hidden">
            <Image
              src={image.src}
              width={600}
              height={600}
              alt="Gallery Image"
              className="object-cover object-center w-auto h-full"
            />
          </div>
        );
      })}
    </div>
  );
}
