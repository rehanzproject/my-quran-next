import Image from "next/image";
import React from "react";

export default function CardHeader() {
  return (
    <div className="relative">
      <Image
        src="/tesc.png"
        alt="quran"
        width={300}
        height={300}
        className="rounded-xl relative"
      />
      <div className="absolute top-0 p-4 text-white">

      <p className="text-sm">Last Read</p>
      <h1 className="font-bold pt-4">Al Fatihah</h1>
      <p className="text-sm">Ayat No. 1</p>
      </div>
    </div>
  );
}
