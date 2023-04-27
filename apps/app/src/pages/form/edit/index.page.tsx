"use client";
import React from "react";
import { ComponentList, Right, Body } from "./components";
import {
  DragDropContext,
  OnDragEndResponder,
  resetServerContext,
} from "react-beautiful-dnd";
import dynamic from "next/dynamic";
export const ComponentDragArea = "ComponentDragArea";
function Context() {
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
export const getServerSideProps = async () => {
  resetServerContext();
  return { props: { data: [] } };
};
export default Context;
