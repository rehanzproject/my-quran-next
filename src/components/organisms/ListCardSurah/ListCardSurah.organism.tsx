import useSWR from "swr";
import { fetcher } from "@/config/fetcherHelper";
import Link from "next/link";

export default function ListCardSurah() {
  // const { data, isLoading } = useSWR(
  //   `https://api.quran.com/api/v4/verses/by_chapter/1?language=id&words=true&page=1&per_page=10`,
  //   fetcher
  // );
const data : string[] = []
  return (
    Array.isArray(data) &&
    data.map((list: any) => (
      <div key={list.id} className="border-y py-4 text-sm">
        <Link
          href={{
            pathname: `/dashboard/${list.name_simple}`,
            query: { id: list.id },
          }}
        >
          <div className="flex items-center gap-4">
            <p className="p-1 px-2 rounded-full border">{list.id}</p>
            <p className="text-base font-bold">{list.name_simple}</p>
            <p className="mx-auto py-2 text-purple-800 text-lg">
              {list.name_arabic}{" "}
            </p>
          </div>

          <div className="flex gap-3 px-10 text-slate-500">
            <p>{list.revelation_place}</p> <p>{list.verses_count} Verses</p>
          </div>
        </Link>
      </div>
    ))
  );
}
