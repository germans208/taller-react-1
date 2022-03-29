import React from "react";
import { Character } from "../types";

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <li>
      <h2>id: {character.id}</h2>
      <h3>name: {character.name}</h3>
      <p>status: {character.status}</p>
      <img src={character.image} alt={character.name} width={200} />
    </li>
  );
};
export default CharacterCard;
