"use client";
import React from "react";
import { ComponentList, Right, Body } from "./components";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";

export default function Home() {
  const onDragEnd: OnDragEndResponder = (...args) => {
    console.log(args);
  };
  return (
    <div className="flex flex-row w-screen h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <ComponentList />
        <Body />
        <Right />
      </DragDropContext>
    </div>
  );
}
