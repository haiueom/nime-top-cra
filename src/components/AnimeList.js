import React from 'react';

const AnimeList = (props) => {
    return (
        <>
            {props.data.map((anime, index) => (
                <div className="bg-white m-2 w-40">
                    <img
                        alt="Guitar"
                        src={anime.images.webp.image_url}
                        className="h-60 w-56 object-cover mx-auto rounded-xl shadow-xl"
                    />
                    <div className="py-2">
                        <h3 className="font-semibold text-sm text-gray-900 break-words">
                            {anime.title}
                        </h3>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AnimeList;
