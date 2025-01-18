import React from "react";
import GameCard from "./GameCard";

// Define the type for the data array
interface CardData {
  name: string;
  elements: string[];
  bild: string;
  weakness: { elements: string[]; exact?: boolean }[];
}

interface CardListProps {
  data: CardData[];
}

const GameCardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="card-container flex flex-wrap gap-6 justify-center">
      {data.map((card, index) => (
        <GameCard
          key={index}
          name={card.name}
          bild={card.bild}
          elements={card.elements}
          weakness={card.weakness}
        />
      ))}
    </div>
  );
};

export default GameCardList;
