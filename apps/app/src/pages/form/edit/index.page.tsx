"use client";
import React from "react";
import { ComponentList, Right, Body } from "./components";

import dynamic from "next/dynamic";
export const ComponentDragArea = "ComponentDragArea";
function Context() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <ComponentList />
      <Body />
      <Right />
    </div>
  );
}
export const getServerSideProps = async () => {
  return { props: { data: [] } };
};
export default Context;
