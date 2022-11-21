import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import Loading from "../components/Loading";

const Character = () => {
  const [characters, setcharacters] = useState([]);

  const getTopCharacter = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/characters");
    const resj = await response.json();

    if (resj.data) {
      setcharacters(resj.data);
    }
  };

  useEffect(() => {
    getTopCharacter();
  }, []);

  if (characters.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="mt-16 mb-10 text-center text-4xl font-bold">
        Top Characters
      </h2>
      <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
        <CharacterList data={characters} />
      </div>
    </>
  );
};

export default Character;
