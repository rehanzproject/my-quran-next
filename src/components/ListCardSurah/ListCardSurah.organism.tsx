import React from "react";

export default function ListCardSurah({ chapters }: { chapters: string[] }) {
  return  Array.isArray(chapters) &&  chapters.map((list : any) => (
   <div key={list?.id} className="border-y py-4 text-sm">
      <div className="flex items-center gap-4">
        <p className="p-1 px-2 rounded-full border">{list.id}</p>
        <p className="text-base font-bold">{list.name_simple}</p>
        <p className="mx-auto">{list.name_arabic} </p>
      </div>

      <div className="flex gap-3 px-10 text-slate-500">
        <p>{list.revelation_place}</p> <p>{list.verses_count} Verses</p>
      </div>
    </div>
  ))
 
}
