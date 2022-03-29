import { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import { ApiResponse, Character } from "./types";

//Mock = informacion falsa para desarrollar
// const charactersMock: Character[] = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//   },
// ];

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      const characterReponse = (await fetch(
        "https://rickandmortyapi.com/api/character"
      ).then((res) => res.json())) as ApiResponse;

      setCharacters(characterReponse.results);
    })();
  }, []);

  return (
    <div className="App">
      <h1>MiniCodeLab</h1>

      {/* <button
        onClick={() => {
          setCharacter(charactersMock);
        }}
      ></button> */}

      <ul>
        {characters.map((character) => {
          return (
              <CharacterCard key={character.id} character={character} />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
