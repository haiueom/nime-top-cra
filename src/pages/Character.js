import React, { useState, useEffect } from "react";
import List from "../components/CardList";
import Loading from "../components/Loading";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/characters")
      .then((res) => res.json())
      .then((raw) => {
        setCharacters(raw.data);
      });
  }, []);

  return (
    <>
      {characters.length === 0 ? (
        <Loading />
      ) : (
        <div id="characters">
          <h2 className="mt-16 mb-10 text-center text-4xl font-bold">
            Top Characters
          </h2>
          <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
            <List data={characters} />
          </div>
        </div>
      )}
    </>
  );
};

export default Character;
