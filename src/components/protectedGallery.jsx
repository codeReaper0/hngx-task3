import React, {useEffect, useState} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import Image from "next/image";
import {CardLoader} from "@/components/loader/cardLoader";

const initialImages = [
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

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: 0,
  margin: 0,
  background: isDragging ? "lightgrey" : "transparent",
  ...draggableStyle,
});

export default function AuthGallery() {
  const [images, setImages] = useState(initialImages);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    // Clear the timer if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter images based on the search term
    const filteredImages = initialImages.filter((image) =>
      image.tag.toLowerCase().includes(searchTerm)
    );
    setImages(filteredImages);
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      images,
      result.source.index,
      result.destination.index
    );
    setImages(items);
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  return loading ? (
    <CardLoader itemCount={initialImages.length} />
  ) : (
    <div className="max-w-7xl mx-auto">
      <input
        type="text"
        placeholder="Search by tag..."
        value={searchTerm}
        onChange={handleSearchInputChange}
        className="block w-full px-4 py-2 mt-4 mb-2 border border-gray rounded-md focus:ring focus:ring-blue-200"
      />
      <div className="image-grid">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="imageGrid" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`image-grid__container ${
                  images.length <= 2 ? "image-grid--two-columns" : ""
                }`}
              >
                {images.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="relative rounded-lg overflow-hidden h-full">
                          <Image
                            src={item.src}
                            layout="fill"
                            objectFit="cover"
                            alt="Gallery Image"
                          />
                          <p className="py-1 px-2 rounded absolute top-4 left-4 bg-red-500/80 text-white text-sm">
                            {item.tag}
                          </p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <style jsx>{`
        .image-grid__container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .image-grid--two-columns {
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 640px) {
          .image-grid__container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .relative {
          position: relative;
          width: 100%;
          padding-bottom: 100%; /* Maintain 1:1 aspect ratio for images */
        }

        .Image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
