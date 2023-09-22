"use client";
import React from "react";
import {
  closestCenter,
  DndContext,
  useSortable,
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/core";
import Image from "next/image";

const imagesArray = [
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

export const AuthImageGallery = () => {
  const [images, setImages] = React.useState(imagesArray);

  const onDragEnd = (event) => {
    const {active, over} = event;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };

  return (
    <div className="image_gallery">
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={images} strategy={verticalListSortingStrategy}>
          {images.map((image) => (
            <SortableImage key={image.id} image={image} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

const SortableImage = ({image}) => {
  const {attributes, listeners, setNodeRef, transform, transition} =
    useSortable({
      id: image.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <Image
        src={image.src}
        width={600}
        height={600}
        alt="Gallery Image"
        className="object-cover object-center w-auto h-full rounded-lg"
      />
    </div>
  );
};
