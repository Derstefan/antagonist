"use client";

import GameCard from "@/components/GameCard";
import { gameCardData } from "@/data/GameCardData";
import Link from "next/link"; // For creating a Home button
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const cardId = searchParams.get("cardId"); // Extract the cardId from the query string


  
  const card = cardId ? gameCardData.find((card) => card.id === parseInt(cardId)) : gameCardData[0];
  //const card =  gameCardData[cardId ? parseInt(cardId): 0];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
             <Link href="/" passHref>
          <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            {"<-"}
          </button>
        </Link>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <GameCard card={card} />
      </main>
      
      {/* Home button */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
