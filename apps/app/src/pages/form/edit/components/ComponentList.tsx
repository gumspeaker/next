import Head from "next/head";
import { Inter } from "next/font/google";
import Demo from "@demo/page-form";
import { List } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-1/4 flex-grow-0">
      <List></List>
    </div>
  );
}