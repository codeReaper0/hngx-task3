"use client";
import React, {useState} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import Image from "next/image";

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

const itemsPerRow = 4;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: 0,
  margin: 0,
  background: isDragging ? "lightgrey" : "transparent",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "transparent" : "transparent",
  padding: 0,
  display: "grid",
  gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
  gap: "24px",
  width: "100%",
  height: "100%",
});

export default function AuthGallery() {
  const [state, setState] = useState(images);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(state, result.source.index, result.destination.index);
    setState(items);
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="imageGrid" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {state.map((item, index) => (
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
                      <div
                        key={item.id}
                        className="relative rounded-lg overflow-hidden"
                      >
                        <Image
                          src={item.src}
                          width={600}
                          height={600}
                          alt="Gallery Image"
                          className="object-cover object-center w-auto h-full"
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
  );
}
