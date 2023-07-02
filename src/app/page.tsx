import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="py-12 text-center">
      <h1 className="text-2xl text-purple-800 font-bold">Quran App</h1>
      <div className="relative py-2 text-slate-500 font-light">
        <p>Learn Quran and</p>
        <p>Recite once everyday</p>
        <Image
          src="/quranview.png"
          alt="quran"
          width={300}
          height={300}
          className="rounded-3xl"
        />
        <Link href="/dashboard"
           className="absolute bottom-0 inset-x-0 rounded-full py-4 mx-10 bg-red-300 text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
