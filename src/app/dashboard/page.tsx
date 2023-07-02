import BottomNavigation from "@/components/moleculs/BottomNavigation/BottomNavigation.molecul";
import Navbar from "@/components/moleculs/Navbar/Navbar.molecul";
import CardHeader from "@/components/organisms/CardHeader/CardHeader.organism";
import {CardSurah} from "@/components/organisms/CardSurah/CardSurah.organism";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start p-4">
      <Navbar />
      <div className="py-2">
        <h1>Assalamualaikum</h1>
        <h1 className="font-bold">Rehan Maulana</h1>
      </div>
      <CardHeader />
      <CardSurah />
      <BottomNavigation />
    </div>
  );
}
