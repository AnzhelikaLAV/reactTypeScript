import { v4 } from "uuid";

import "./styles.css";
import { animalServerData } from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";

function Lesson05() {
  const animalCards = animalServerData.map((animalCard) => {
    return (
      <div key={v4()}>
        <h1>Animal Card - Madagascar</h1>
        <AnimalCard animalData={animalCard} />
      </div>
    );
  });

  return (
    <div className="lesson05-container">
      {/* var1
      <AnimalCard animalData={animalServerData[0]} />
      <AnimalCard animalData={animalServerData[1]} />
      <AnimalCard animalData={animalServerData[2]} />
      <AnimalCard animalData={animalServerData[3]} /> */}
      {/* var2 */}
      {animalCards}
    </div>
  );
}

export default Lesson05;
