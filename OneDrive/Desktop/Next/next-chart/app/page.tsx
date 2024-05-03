"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="p-20">
        <Link href="/chart" className="text-xl font-bold text-white border-solid border-gray-500 border-2 rounded-xl p-5 hover:text-black hover:bg-stone-400 ">Click here to go the chart</Link>
      </div>
   </main>
  );
}
