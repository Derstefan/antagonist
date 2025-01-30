import { CardData } from "@/data/GameCardData";
import React from "react";

interface CardProps {
  card: CardData;
}

const elementColors: { [key: string]: string } = {
  "=": "bg-gray-500",
  "f": "bg-red-500",
  "w": "bg-blue-500",
  "e": "bg-green-600",
  "a": "bg-teal-500",
  "l": "bg-yellow-500",
  "d": "bg-gray-800",
  "m": "bg-purple-500",
};
const GameCard: React.FC<CardProps> = ({card}) => {
  const { name, elements, weakness, bild,type } = card;
  return (
    <div className="bg-orange-300 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 w-72 h-118 flex flex-col justify-between" onClick={() => {window.location.href = `/cards/${card.id}`}}>

      <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>

      <div className="flex justify-center gap-2 mb-4">
        {Array.from(elements).map((element, index) => (
          <div
            key={index}
            className={`w-7 h-7 flex items-center justify-center rounded-full text-yellow ${elementColors[element]}`}
          >
            {element.charAt(0).toUpperCase()}
          </div>
        ))}
          <span className="text-2xl font-bold text-gray-200 mb-1 ml-2">{type === "attacking" ? " X" : ""}</span>
      </div>
      <img
        src={bild || "https://via.placeholder.com/150"}
        alt={name}
        className="w-full h-38 object-cover rounded mb-4"
      />
      <div>
        <ul className="mt-2 text-gray-600">
          {weakness.map((weaknessStr, index) => {
            const exactMatch = weaknessStr.startsWith("=");
            const elements = exactMatch ? weaknessStr.slice(1) : weaknessStr;
            return (
              <li key={index} className="mt-1 flex items-center gap-2">
                <div className="flex gap-1">
                  {exactMatch && (
                    <span className="text-sm text-gray-500">=</span>
                  )}
                  {Array.from(elements).map((subElement, subIndex) => (
                    <div
                      key={subIndex}
                      className={`w-6 h-6 flex items-center justify-center rounded-full text-xs text-white ${elementColors[subElement]}`}
                    >
                      {subElement.charAt(0).toUpperCase()}
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default GameCard;
