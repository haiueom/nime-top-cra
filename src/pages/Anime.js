import React, { useState, useEffect } from "react";
import AnimeList from "../components/AnimeList";
import Loading from "../components/Loading";

const Anime = () => {
  const [animes, setAnimes] = useState([]);

  const getTopAnime = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const resj = await response.json();

    if (resj.data) {
      setAnimes(resj.data);
    }
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  if (animes.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="mt-16 mb-10 text-center text-4xl font-bold">Top Anime</h2>
      <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
        <AnimeList data={animes} />
      </div>
    </>
  );
};

export default Anime;
