import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import Loading from '../components/Loading';

const Anime = () => {
    const [animes, setAnimes] = useState([]);

    const getTopAnime = async () => {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
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
            <h2 className="mt-16 mb-10 font-bold text-4xl text-center">
                Top Anime
            </h2>
            <div className="mb-16 flex flex-wrap justify-center max-w-screen-lg mx-auto">
                <AnimeList data={animes} />
            </div>
        </>
    );
};

export default Anime;
