import React, { useState, useEffect } from "react";
import AnimeList from "../components/AnimeList";
import Loading from "../components/Loading";

const Manga = () => {
  const [mangas, setmangas] = useState([]);

  const getTopManga = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/manga");
    const resj = await response.json();

    if (resj.data) {
      setmangas(resj.data);
    }
  };

  useEffect(() => {
    getTopManga();
  }, []);

  if (mangas.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <h2 className="mt-16 mb-10 text-center text-4xl font-bold">Top manga</h2>
      <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
        <AnimeList data={mangas} />
      </div>
    </>
  );
};

export default Manga;
