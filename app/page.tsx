import Link from "next/link";
import GameCardList from "../components/GameCardList";
import { gameCardData } from "../data/GameCardData";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <Link href="/match" passHref>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Battle Builder
        </button>
      </Link>
       <GameCardList data={gameCardData} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
