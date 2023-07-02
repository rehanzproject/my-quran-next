import ArrowLeft from "@/components/atoms/icons/ArrowLeft.icon";
import MagnifyingGlass from "@/components/atoms/icons/MagnifyingGlass.icon";
import { useRouter } from "next/navigation";
import React from "react";

export default function DetailHeader({ detail }: { detail: string }) {
  const router = useRouter()
  return (
    <div className="flex justify-between mx-10">
      
     <div className="" onClick={() => router.back()} >
     <ArrowLeft  />
     </div>
      <h1 className="text-purple-800 font-bold text-2xl">{detail}</h1>
      <MagnifyingGlass />
    </div>
  );
}
