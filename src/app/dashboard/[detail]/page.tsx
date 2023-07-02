"use client";
import BottomNavigation from "@/components/moleculs/BottomNavigation/BottomNavigation.molecul";
import DetailHeader from "@/components/moleculs/DetailHeader/DetailHeader.moleculs";
import DetailCardSurah  from "@/components/organisms/DetailCardSurah/DetailCardSurah.organism";

export default function DetailSurah({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  return (
    <div className="flex flex-col justify-start p-4">
      <DetailHeader detail={params.detail} />
      <div className="overflow-y-auto h-[36rem]">
      <DetailCardSurah id={searchParams.id} />
      </div>
      <BottomNavigation />
    </div>
  );
}
