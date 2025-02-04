import { CardData } from "@/data/GameCardData";
import React from "react";

interface CardProps {
  card: CardData;
  size?: "small" | "medium";
  color?: string;
  clickable?: boolean;
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

const GameCard: React.FC<CardProps> = ({ card, size = "medium" ,color,clickable = "true"}) => {
  const { name, elements, weakness, bild, type } = card;

  // Determine styles based on the size prop
  const cardSizeStyles = size === "small" ? {
    card: "w-56 h-94 p-4", // Smaller width and height, less padding
    title: "text-xl", // Smaller title font size
    element: "w-6 h-6 text-sm", // Smaller element circles
    image: "h-28", // Smaller image height
    weaknessElement: "w-5 h-5 text-xs", // Smaller weakness element circles
  } : {
    card: "w-72 h-118 p-6", // Default size
    title: "text-2xl", // Default title font size
    element: "w-7 h-7 text-base", // Default element circles
    image: "h-38", // Default image height
    weaknessElement: "w-6 h-6 text-sm", // Default weakness element circles
  };

  return (
    <div
      className={`${color? color: "bg-orange-300"} shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 flex flex-col justify-between ${cardSizeStyles.card}`}
      onClick={() => {if(clickable) window.location.href = `/cards/${card.id}` }}
    >
      {/* Card Title */}
      <h2 className={`font-bold text-gray-800 mb-1  ${cardSizeStyles.title}`}>
        {name}
      </h2>

      {/* Card Elements */}
      <div className="flex justify-center gap-2 mb-4">
        {Array.from(elements).map((element, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full text-yellow shadow-xxl shadow-[2px_4px_15px_rgba(0,0,0,0.4)] ${elementColors[element]} ${cardSizeStyles.element}`}
          >
            {element.charAt(0).toUpperCase()}
          </div>
        ))}
        <span className={`font-bold text-gray-100 mb-1 ml-2 ${cardSizeStyles.title}  text-4xl`}>
          {type === "attacking" ? " X" : ""}
        </span>
      </div>

      {/* Card Image */}
      <img
        src={bild || "https://via.placeholder.com/150"}
        alt={name}
        className={`w-full object-cover rounded mb-4 ${cardSizeStyles.image}`}
      />

      {/* Card Weaknesses */}
      <div>
        <ul className="mt-2 text-gray-600">
          {weakness.map((weaknessStr, index) => {
            const exactMatch = weaknessStr.startsWith("=");
            const elements = exactMatch ? weaknessStr.slice(1) : weaknessStr;
            return (
              <li key={index} className="mt-1 flex items-center gap-2 ">
                <div className="flex gap-1">
                  {exactMatch && (
                    <span className="text-sm text-gray-500">=</span>
                  )}
                  {Array.from(elements).map((subElement, subIndex) => (
                    <div
                      key={subIndex}
                      className={`flex items-center justify-center rounded-full text-white shadow-xxl shadow-[2px_4px_15px_rgba(0,0,0,0.4)] ${elementColors[subElement]} ${cardSizeStyles.weaknessElement}`}
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