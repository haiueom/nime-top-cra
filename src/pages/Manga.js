import React, { useState, useEffect } from "react";
import List from "../components/CardList";
import Loading from "../components/Loading";

const Manga = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/manga")
      .then((res) => res.json())
      .then((raw) => {
        setMangas(raw.data);
      });
  }, []);

  return (
    <>
      {mangas.length === 0 ? (
        <Loading />
      ) : (
        <div id="mangas">
          <h2 className="mt-16 mb-10 text-center text-4xl font-bold">
            Top manga
          </h2>
          <div className="mx-auto mb-16 flex max-w-screen-lg flex-wrap justify-center">
            <List data={mangas} />
          </div>
        </div>
      )}
    </>
  );
};

export default Manga;
