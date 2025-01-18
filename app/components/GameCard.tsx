import React from "react";

// Define the type for a sub-element
interface SubElement {
  elements: string[];
  exact?: boolean;
}

// Define the type for card data
interface CardProps {
  name: string;
  elemente: string[];
  bild: string;
  arrayElemente: SubElement[];
}

// Map for SVG icons
const svgMap: Record<string, React.JSX.Element> = {
  feuer: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
  wasser: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
  erde: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="brown"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
  wind: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
  licht: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
  dunkelheit: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
  mystik: <svg className="element-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="purple"><path d="M12 2c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.418 3.582-8 8-8z"/></svg>,
};
const elementColors: { [key: string]: string } = {
    feuer: "bg-red-500",
    wasser: "bg-blue-500",
    erde: "bg-green-600",
    wind: "bg-teal-500",
    licht: "bg-yellow-400",
    dunkelheit: "bg-gray-800",
    mystik: "bg-purple-500",
  };
  
  const GameCard: React.FC<CardProps> = ({ name, elemente,bild, arrayElemente }) => {
    return (
      <div className=" bg-amber-500 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 w-72 h-96 flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <div className="flex justify-center gap-2 mb-4">
          {elemente.map((element, index) => (
            <div
              key={index}
              className={`w-7 h-7 flex items-center justify-center rounded-full text-yellow ${elementColors[element]}`}
            >
              {element.charAt(0).toUpperCase()}
            </div>
          ))}
        </div>
        <img
          src={bild || "https://via.placeholder.com/150"}
          alt={name}
          className="w-full h-32 object-cover rounded mb-4"
        />
        <div>
          <ul className="mt-2 text-gray-600">
            {arrayElemente.map((array, index) => (
              <li key={index} className="mt-1 flex items-center gap-2">
                <div className="flex gap-1">
                    {array.exact !== undefined && (
                      <span className="text-sm text-gray-500">
                        {array.exact ? "=" : ""}
                      </span>
                    )}
                  {array.elements.map((subElement, subIndex) => (
                    <div
                      key={subIndex}
                      className={`w-6 h-6 flex items-center justify-center rounded-full text-xs text-white ${elementColors[subElement]}`}
                    >
                      {subElement.charAt(0).toUpperCase()}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

export default GameCard;
