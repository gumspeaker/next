"use client";
import React from "react";
import { ComponentList, Right, Body } from "./components";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <ComponentList />
      <Body />
      <Right />
    </div>
  );
}