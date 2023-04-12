"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import Demo from "@demo/page-form";
import { Left, Right, Body } from "./components";
import dynamic from "next/dynamic";
export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Left />
      <Body />
      <Right />
    </div>
  );
}
// export default dynamic(Promise.resolve(Home), { ssr: false });
