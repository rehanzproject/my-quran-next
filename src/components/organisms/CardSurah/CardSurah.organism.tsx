import '@/app/globals.css'
import ListCardSurah from "@/components/ListCardSurah/ListCardSurah.organism";

async function getServerSideProps() {
  // Fetch data from an API or other source
  const data = await fetch("https://api.quran.com/api/v4/chapters?language=id");
  const res = await data.json();

  // Return the fetched data as props
  return res
}
export async function CardSurah() {
   const dataQuran = await getServerSideProps()
   
  return (
    <div>
      <h1 className="font-bold py-2">Surah</h1>
      <div className="scroll-container">
      <ListCardSurah {...dataQuran} />
      </div>
    </div>
  );
}
