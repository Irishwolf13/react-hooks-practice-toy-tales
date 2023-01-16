import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ myData }) {
  const toyCards = myData.map(toy => (
    <ToyCard 
      name={ toy.name }
      image={ toy.image} 
      likes={ toy.likes }
      key={ toy.id }
      id={ toy.id }
      />
  ))
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
