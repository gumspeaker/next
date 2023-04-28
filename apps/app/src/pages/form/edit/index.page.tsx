"use client";
import React from "react";
import { ComponentList, Right, FormContext } from "./components";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { HTML5Backend } from "react-dnd-html5-backend";
export const ComponentDragArea = "ComponentDragArea";
function Context() {
  const dragEndHandle = (e: DragEndEvent) => {
    console.log(e);
  };
  return (
    <div className="flex flex-row w-screen h-screen">
      <DndContext onDragEnd={dragEndHandle}>
        <ComponentList />
        <FormContext />
        <Right />
      </DndContext>
    </div>
  );
}
export default Context;
