import { AnimalCardWrapper, AnimalImg, CardTitle, CardInfo } from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <CardTitle>{animalData.name}</CardTitle>
      <CardInfo>{animalData.species}</CardInfo>
      <CardInfo>{animalData.role}</CardInfo>
      <AnimalImg src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
