import { fetcher } from "@/config/fetcherHelper";
import React from "react";
import useSWR from 'swr';

export default function DetailCardSurah({ id }: { id: number }) {
  
  const { data, isLoading } = useSWR(
    `https://quran-api.santrikoding.com/api/surah/${id}  `,fetcher
  );

  return (
    <div>
      {data?.ayat?.map((ayat: any) => (
        <>
          <div key={ayat.nomor} className="bg-purple-50 p-2 my-4 border-b">
            <h1 className="rounded-full bg-purple-700 px-2 mx-2 inline-block text-white">
              {ayat.nomor}
            </h1>
          </div>
          <p className="flex justify-end text-lg">{ayat.ar}</p>
          <p className="text-sm">{ayat.idn}</p>
        </>
      ))}
    </div>
  );
}
