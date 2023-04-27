"use client";
import React from "react";
import { ComponentList, Right, Body } from "./components";
import dynamic from "next/dynamic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const ComponentDragArea = "ComponentDragArea";
function Context() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <DndProvider backend={HTML5Backend}>
        <ComponentList />
        <Body />
        <Right />
      </DndProvider>
    </div>
  );
}
export default Context;
