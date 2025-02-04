"use client";

import GameCard from "@/components/GameCard";
import { gameCardData } from "@/data/GameCardData";
import Link from "next/link"; // For creating a Home button
import { useParams } from "next/navigation";
import { useState } from "react";


function isMultisetSubset(subset: string, superset: string): boolean {
  const freq: { [char: string]: number } = {};
  for (const char of superset) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (const char of subset) {
    if (!freq[char]) {
      return false;
    }
    freq[char]--;
  }
  return true;
}


export default function Home() {
  const params = useParams(); // Get the dynamic route parameters
  const cardId = Array.isArray(params.cardId) ? params.cardId[0] : params.cardId; // Ensure cardId is a string
  const [showCounteredCards, setShowCounteredCards] = useState(true); 

  
  const card = cardId ? gameCardData.find((card) => card.id === parseInt(cardId)) : gameCardData[0];

  if (!card) {
    return <div>Card not found</div>;
  }

  const counteredCards = gameCardData.filter((otherCard) => {
    return otherCard.weakness.some((w: string) => {
      if (w.startsWith("=")) {
        // Exact match: Die Weakness muss exakt den Elementen der aktuellen Karte entsprechen.
        return w.slice(1) === card.elements;
      } else {
        // Partial match: Die Weakness (als Multiset) muss in den Elementen der aktuellen Karte enthalten sein.
        return isMultisetSubset(w, card.elements);
      }
    });
  });
  
  // Karten, die die aktuelle Karte "countering" (d.h. andere Karten, bei denen die Weakness der aktuellen
  // Karte in deren Elementen enthalten ist)
  const counteringCards = gameCardData.filter((otherCard) => {
    return card.weakness.some((weakness: string) => {
      if (weakness.startsWith("=")) {
        // Exact match: Die Weakness muss exakt den Elementen der anderen Karte entsprechen.
        return weakness.slice(1) === otherCard.elements;
      } else {
        // Partial match: Die Weakness (als Multiset) muss in den Elementen der anderen Karte enthalten sein.
        return isMultisetSubset(weakness, otherCard.elements);
      }
    });
  });

      // Get cards that are neither countering nor countered
  const neutralCards = gameCardData.filter(
    (otherCard) =>
      !counteredCards.includes(otherCard) && !counteringCards.includes(otherCard)
  );
  
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
      <h2
        className="text-2xl font-bold text-gray-800 mb-1 cursor-pointer"
        onClick={() => setShowCounteredCards(!showCounteredCards)} // Toggle state on click
      >
        {showCounteredCards ? "Countering" : "Countered By"}
      </h2>
      <div className="card-container flex flex-wrap gap-6 justify-center">
        {showCounteredCards
          ? counteredCards.map((card, index) => (
              <GameCard key={index} card={card} size="small" color="bg-green-300"/>
            ))
          : counteringCards.map((card, index) => (
              <GameCard key={index} card={card} size="small" color="bg-red-300" />
            ))}
      </div>

      {/* Neutral cards section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Neutral Cards</h2>
      <div className="card-container flex flex-wrap gap-6 justify-center">
        {neutralCards.map((card, index) => (
          <GameCard key={index} card={card} size="small" />
        ))}
      </div>
      {/* Home button */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
