"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import { CardData, gameCardData } from "@/data/GameCardData";

// Element-Farben für Anzeige
const elementColors: { [key: string]: string } = {
  f: "bg-red-500",
  w: "bg-blue-500",
  e: "bg-green-600",
  a: "bg-teal-500",
  l: "bg-yellow-500",
  d: "bg-gray-800",
  m: "bg-purple-500",
};

// Hilfsfunktion zum Zählen der Elemente eines Spielers
function countElements(cards: CardData[]) {
  const counts: Record<string, number> = { f: 0, w: 0, a: 0, e: 0, d: 0, l: 0, m: 0 };
  cards.forEach((card) => {
    for (const char of card.elements) {
      if (counts[char] !== undefined) {
        counts[char]++;
      }
    }
  });
  return counts;
}

function canPlayAttackingCard(card: CardData, playerElements: Record<string, number>) {
  if (card.type !== "attacking") return true; // Nicht-angreifende Karten können immer gespielt werden

  for (const char of card.elements) {
    if (!playerElements[char] || playerElements[char] < (card.elements.match(new RegExp(char, "g")) || []).length) {
      return false;
    }
  }
  return true;
}

// Prüft, ob eine Weakness als Multiset in den Elementen enthalten ist.
// Bei Weaknesses, die mit "=" beginnen, muss exakt die angegebene Anzahl vorhanden sein.
function isWeaknessSatisfied(weakness: string, playerElements: Record<string, number>) {
  if (weakness.startsWith("=")) {
    const requiredElements = weakness.slice(1);
    const requiredCounts: Record<string, number> = {};
    for (const char of requiredElements) {
      requiredCounts[char] = (requiredCounts[char] || 0) + 1;
    }
    return Object.entries(requiredCounts).every(
      ([element, count]) => playerElements[element] === count
    );
  } else {
    const weaknessCounts: Record<string, number> = {};
    for (const char of weakness) {
      weaknessCounts[char] = (weaknessCounts[char] || 0) + 1;
    }
    return Object.entries(weaknessCounts).every(
      ([element, count]) => (playerElements[element] || 0) >= count
    );
  }
}

export default function GameBoardPage() {
  // Zustände für die Spielerbereiche
  const [player1Cards, setPlayer1Cards] = useState<CardData[]>([]);
  const [player2Cards, setPlayer2Cards] = useState<CardData[]>([]);
  const [shakePlayer1, setShakePlayer1] = useState(false);
  const [shakePlayer2, setShakePlayer2] = useState(false);

  const player1Elements = countElements(player1Cards);
  const player2Elements = countElements(player2Cards);

  // Zustände für Filter/Sortierung der verfügbaren Karten
  const [availableCards, setAvailableCards] = useState<CardData[]>(gameCardData);
  const [sortedAvailableCards, setSortedAvailableCards] = useState<CardData[]>(gameCardData);
  const [isAscending, setIsAscending] = useState(true);
  const [tierFilter, setTierFilter] = useState("all");
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [showColorFilter, setShowColorFilter] = useState(false);

  // Effekt, um die Filter immer anzuwenden, wenn availableCards sich ändert
  useEffect(() => {
    applyFilters(tierFilter, selectedElements);
  }, [availableCards]);

  const toggleSort = () => {
    const sorted = [...sortedAvailableCards].sort((a, b) =>
      isAscending
        ? b.elements.length - a.elements.length
        : a.elements.length - b.elements.length
    );
    setSortedAvailableCards(sorted);
    setIsAscending(!isAscending);
  };

  const filterByTier = (tier: string) => {
    setTierFilter(tier);
    applyFilters(tier, selectedElements);
  };

  const handleElementChange = (element: string) => {
    const updatedSelectedElements = selectedElements.includes(element)
      ? selectedElements.filter((el) => el !== element)
      : [...selectedElements, element];
    setSelectedElements(updatedSelectedElements);
    applyFilters(tierFilter, updatedSelectedElements);
  };

  const resetElementFilters = () => {
    setSelectedElements([]);
    applyFilters(tierFilter, []);
  };

  const applyFilters = (tier: string, elements: string[]) => {
    let filteredData = [...availableCards];

    // Filter nach Tier (Stufe)
    if (tier === "1") {
      filteredData = filteredData.filter(
        (card) => card.elements.length === 1
      );
    } else if (tier === "2") {
      filteredData = filteredData.filter(
        (card) => card.elements.length === 2
      );
    } else if (tier === "3") {
      filteredData = filteredData.filter((card) => card.elements.length >= 3);
    }

    // Filter nach ausgewählten Elementen (UND-Verknüpfung)
    if (elements.length > 0) {
      filteredData = filteredData.filter((card) =>
        elements.every((el) => card.elements.includes(el))
      );
    }

    setSortedAvailableCards(filteredData);
  };

  // Drop-Handler für Spieler 1
  const handleDropPlayer1 = (card: CardData) => {
    const wouldBeDestroyed = card.weakness.some((weak) =>
      isWeaknessSatisfied(weak, player2Elements)
    );
    if (wouldBeDestroyed || !canPlayAttackingCard(card, player1Elements)) {
      setShakePlayer1(true);
      setTimeout(() => setShakePlayer1(false), 500);
      console.log("Karte kann nicht abgelegt werden, da sie sofort zerstört würde oder nicht gespielt werden kann!");
      return;
    }
    if (!player1Cards.find((c) => c.id === card.id)) {
      const newPlayer1Cards = [...player1Cards, card];
      const updatedPlayer1Elements = countElements(newPlayer1Cards);
      const filteredPlayer2Cards = player2Cards.filter(
        (enemyCard) =>
          !enemyCard.weakness.some((w) =>
            isWeaknessSatisfied(w, updatedPlayer1Elements)
          )
      );
      setPlayer1Cards(newPlayer1Cards);
      setPlayer2Cards(filteredPlayer2Cards);
    }
  };

  // Drop-Handler für Spieler 2
  const handleDropPlayer2 = (card: CardData) => {
    const wouldBeDestroyed = card.weakness.some((weak) =>
      isWeaknessSatisfied(weak, player1Elements)
    );
    if (wouldBeDestroyed || !canPlayAttackingCard(card, player2Elements)) {
      setShakePlayer2(true);
      setTimeout(() => setShakePlayer2(false), 500);
      console.log("Karte kann nicht abgelegt werden, da sie sofort zerstört würde oder nicht gespielt werden kann!");
      return;
    }
    if (!player2Cards.find((c) => c.id === card.id)) {
      const newPlayer2Cards = [...player2Cards, card];
      const updatedPlayer2Elements = countElements(newPlayer2Cards);
      const filteredPlayer1Cards = player1Cards.filter(
        (enemyCard) =>
          !enemyCard.weakness.some((w) =>
            isWeaknessSatisfied(w, updatedPlayer2Elements)
          )
      );
      setPlayer2Cards(newPlayer2Cards);
      setPlayer1Cards(filteredPlayer1Cards);
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col gap-8">
      <Link href="/" passHref>
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          {"<-"} Home
        </button>
      </Link>

      {/* Anzeige der Elementanzahl mit Clear-Buttons für beide Spieler */}
      <div className="flex flex-row gap-8 justify-center items-center">
        {/* Spieler 1: Clear-Button links */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setShakePlayer1(true);
              setTimeout(() => setShakePlayer1(false), 500);
              setPlayer1Cards([]);
            }}
            className="bg-gray-700 text-white py-1 px-2 rounded"
          >
            X
          </button>
          <div className="p-2 rounded-md bg-green-200 flex gap-2">
            {Object.entries(player1Elements).map(([el, count]) => (
              <span
                key={el}
                className={`px-2 py-1 rounded-md text-white ${elementColors[el]}`}
              >
                {count}
              </span>
            ))}
          </div>
        </div>

        {/* Spieler 2: Clear-Button rechts (Elementzählung wird invertiert) */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-red-200 flex gap-2">
            {Object.entries(player2Elements).reverse().map(([el, count]) => (
              <span
                key={el}
                className={`px-2 py-1 rounded-md text-white ${elementColors[el]}`}
              >
                {count}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              setShakePlayer2(true);
              setTimeout(() => setShakePlayer2(false), 500);
              setPlayer2Cards([]);
            }}
            className="bg-gray-700 text-white py-1 px-2 rounded"
          >
            X
          </button>
        </div>
      </div>

      {/* Drop-Zonen für Spieler */}
      <div className="flex flex-col md:flex-row gap-8">
        <div
          className={`p-4 border-2 rounded-md w-full md:w-1/2 min-h-[300px] bg-green-100 ${shakePlayer1 ? "shake" : ""}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const cardId = e.dataTransfer.getData("cardId");
            const card = gameCardData.find((c) => c.id === parseInt(cardId));
            if (card) handleDropPlayer1(card);
          }}
        >
          <div className="flex flex-wrap gap-4">
            {player1Cards.map((card, index) => (
              <GameCard key={index} card={card} size="small" clickable={false} />
            ))}
          </div>
        </div>

        <div
          className={`p-4 border-2 rounded-md w-full md:w-1/2 min-h-[300px] bg-red-100 ${shakePlayer2 ? "shake" : ""}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const cardId = e.dataTransfer.getData("cardId");
            const card = gameCardData.find((c) => c.id === parseInt(cardId));
            if (card) handleDropPlayer2(card);
          }}
        >
          <div className="flex flex-wrap gap-4">
            {player2Cards.map((card, index) => (
              <GameCard key={index} card={card} size="small" clickable={false} />
            ))}
          </div>
        </div>
      </div>

      {/* Bereich mit allen verfügbaren Karten inklusive Filter- und Sortier-Controls */}
      <div className="mt-8 border-t pt-4">
        <h2 className="text-2xl font-bold mb-4">Verfügbare Karten</h2>

        {/* Filter- und Sortiercontrols */}
        <div className="controls flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded flex items-center hover:bg-gray-600"
            onClick={toggleSort}
          >
            {isAscending ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5l-7.5 7.5-7.5-7.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 13.5l7.5-7.5 7.5 7.5" />
              </svg>
            )}
          </button>
          <select
            className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
            value={tierFilter}
            onChange={(e) => filterByTier(e.target.value)}
          >
            <option value="all">alle Stufen</option>
            <option value="1">1. Stufe</option>
            <option value="2">2. Stufe</option>
            <option value="3">3. Stufe</option>
          </select>

          {/* Color Filter Button */}
          {!showColorFilter && (
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={() => setShowColorFilter(!showColorFilter)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" className="w-6 h-6">
                <circle cx="4" cy="4" r="3" fill="red" />
                <circle cx="12" cy="4" r="3" fill="blue" />
                <circle cx="20" cy="4" r="3" fill="yellow" />
                <circle cx="4" cy="12" r="3" fill="green" />
                <circle cx="12" cy="12" r="3" fill="indigo" />
                <circle cx="20" cy="12" r="3" fill="gray" />
                <circle cx="4" cy="20" r="3" fill="pink" />
              </svg>
            </button>
          )}

          {/* Color checkboxes */}
          <div
            className={`flex items-center gap-4 transition-all duration-300 ease-in-out ${
              showColorFilter ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {["f", "w", "e", "a", "l", "d", "m"].map((element) => (
              <label key={element} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={element}
                  checked={selectedElements.includes(element)}
                  onChange={() => handleElementChange(element)}
                  className="hidden"
                />
                <span
                  className={`w-6 h-6 border-2 border-gray-300 rounded cursor-pointer ${
                    selectedElements.includes(element)
                      ? elementColors[element]
                      : "bg-gray-100"
                  }`}
                ></span>
              </label>
            ))}
            <div
              className={`transition-opacity duration-300 ${
                selectedElements.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <button
                className="bg-red-300 text-white px-2 rounded hover:bg-red-500"
                onClick={resetElementFilters}
              >
                X
              </button>
            </div>
          </div>
        </div>

        {/* Anzeige der gefilterten und sortierten verfügbaren Karten */}
        <div className="flex flex-wrap gap-4 justify-center overflow-y-auto" style={{ maxHeight: "500px" }}>
          {sortedAvailableCards.map((card) => (
            <div
              key={card.id}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("cardId", card.id.toString())}
              className="cursor-move"
            >
              <GameCard card={card} size="small" clickable={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Styled-JSX für die Shake-Animation */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        .shake {
          animation: shake 0.3s;
        }
      `}</style>
    </div>
  );
}
