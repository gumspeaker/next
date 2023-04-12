import Head from "next/head";
import { Inter } from "next/font/google";
import Demo from "@demo/page-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/form/edit");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}
