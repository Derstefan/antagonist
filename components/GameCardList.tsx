"use client";

import React, { useState } from "react";
import GameCard from "./GameCard";
import { CardData } from "@/data/GameCardData";

// Define the type for the data array

interface CardListProps {
  data: CardData[];
}

export const elementColors: { [key: string]: string } = {
    f: "bg-red-500", // Fire
    w: "bg-blue-500", // Water
    e: "bg-green-700", // Earth
    a: "bg-gray-500", // Air
    l: "bg-yellow-500", // Light
    d: "bg-gray-700", // Darkness
    m: "bg-fuchsia-500", // Holy
  };

  export const elementColorsLight: { [key: string]: string } = {
    f: "bg-red-100", // Fire
    w: "bg-blue-100", // Water
    e: "bg-green-100", // Earth
    a: "bg-gray-100", // Air
    l: "bg-indigo-100", // Light
    d: "bg-gray-100", // Darkness
    m: "bg-fuchsia-100", // Holy
  };


const GameCardList: React.FC<CardListProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [isAscending, setIsAscending] = useState(true); // Track sort direction
  const [tierFilter, setTierFilter] = useState("all"); // Track selected tier
  const [selectedElements, setSelectedElements] = useState<string[]>([]); // Track selected elements
  const [showColorFilter, setShowColorFilter] = useState(false); // Track visibility of color filter



  const toggleSort = () => {
    const sorted = [...sortedData].sort((a, b) =>
      isAscending
        ? b.elements.length - a.elements.length // Descending if currently ascending
        : a.elements.length - b.elements.length // Ascending if currently descending
    );
    setSortedData(sorted);
    setIsAscending(!isAscending); // Toggle sort direction
  };

  const filterByTier = (tier: string) => {
    setTierFilter(tier);
    applyFilters(tier, selectedElements);
  };

  const handleElementChange = (element: string) => {
    const updatedSelectedElements = selectedElements.includes(element)
      ? selectedElements.filter((el) => el !== element) // Remove element if unchecked
      : [...selectedElements, element]; // Add element if checked

    setSelectedElements(updatedSelectedElements);
    applyFilters(tierFilter, updatedSelectedElements);
  };

  const resetElementFilters = () => {
    setSelectedElements([]);
    applyFilters(tierFilter, []);
  };

  const applyFilters = (tier: string, elements: string[]) => {
    let filteredData = [...data];

    // Filter by tier
    if (tier === "1") {
      filteredData = filteredData.filter(
        (card) => card.elements.length >= 1 && card.elements.length <= 1
      );
    } else if (tier === "2") {
      filteredData = filteredData.filter(
        (card) => card.elements.length >= 2 && card.elements.length <= 2
      );
    } else if (tier === "3") {
      filteredData = filteredData.filter((card) => card.elements.length >= 3);
    }

    // Filter by selected elements with AND logic
    if (elements.length > 0) {
      filteredData = filteredData.filter((card) =>
        elements.every((el) => card.elements.includes(el))
      );
    }

    setSortedData(filteredData);
  };

  return (
    <div>

      <div className="controls flex flex-wrap justify-center gap-4 mb-6">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded flex items-center hover:bg-gray-600"
          onClick={toggleSort}
        >
          {isAscending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 13.5l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        <select
          className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
          value={tierFilter}
          onChange={(e) => filterByTier(e.target.value)}
        >
          <option value="all">alle Stufen</option>
          <option value="1">1. Stufe </option>
          <option value="2">2. Stufe </option>
          <option value="3">3. Stufe </option>
        </select>
        
        {/* Color Filter Button */}
        { !showColorFilter &&
        <button
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        onClick={() => setShowColorFilter(!showColorFilter)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <circle cx="4" cy="4" r="3" fill="red" />
          <circle cx="12" cy="4" r="3" fill="blue" />
          <circle cx="20" cy="4" r="3" fill="yellow" />
          <circle cx="4" cy="12" r="3" fill="green" />
          <circle cx="12" cy="12" r="3" fill="indigo" />
          <circle cx="20" cy="12" r="3" fill="gray" />
          <circle cx="4" cy="20" r="3" fill="pink" />
        </svg>
      </button>
}

        {/* Color checkboxes with transition */}
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
                  selectedElements.includes(element) ? elementColors[element] : elementColorsLight[element]
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
      <div className="card-container flex flex-wrap gap-6 justify-center">
        {sortedData.map((card, index) => (
          <GameCard
            key={index}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCardList;
