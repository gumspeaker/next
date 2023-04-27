"use client";
import React from "react";
import { ComponentList, Right, Body } from "./components";
import dynamic from "next/dynamic";
export const ComponentDragArea = "ComponentDragArea";
function Context() {
  const onDragEnd: OnDragEndResponder = (...args) => {
    console.log(args);
  };
  return (
    <div className="flex flex-row w-screen h-screen">
      <ComponentList />
      <Body />
      <Right />
    </div>
  );
}
