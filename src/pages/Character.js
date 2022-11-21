import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import Loading from '../components/Loading';

const Character = () => {
    const [characters, setcharacters] = useState([]);

    const getTopCharacter = async () => {
        const response = await fetch('https://api.jikan.moe/v4/top/characters');
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
            <h2 className="mt-16 mb-10 font-bold text-4xl text-center">
                Top Characters
            </h2>
            <div className="mb-16 flex flex-wrap justify-center max-w-screen-lg mx-auto">
                <CharacterList data={characters} />
            </div>
        </>
    );
};

export default Character;
