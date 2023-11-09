import PageView from "@/components/page-view";
import React from "react";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <div>
      <h1 className="max-w-md m-auto text-2xl py-8">About us</h1>
      <PageView />
    </div>
  );
}
