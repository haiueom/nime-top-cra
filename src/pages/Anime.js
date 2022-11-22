import React, { useState, useEffect } from "react";
import List from "../components/CardList";
import Loading from "../components/Loading";

const Anime = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((raw) => {
        setAnimes(raw.data);
      });
  }, []);

  return (
    <>
      {animes.length === 0 ? (
        <Loading />
      ) : (
        <div id="animes">
          <h2 className="mt-16 mb-10 text-center text-4xl font-bold">
            Top Animes
          </h2>
          <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
            <List data={animes} />
          </div>
        </div>
      )}
    </>
  );
};

export default Anime;
