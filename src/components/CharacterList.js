import React from 'react';

const CharacterList = (props) => {
    return (
        <>
            {props.data.map((character, index) => (
                <div className="bg-white m-2 w-40">
                    <img
                        title={character.name}
                        alt={"Image " + character.name}
                        src={character.images.webp.image_url}
                        className="h-60 w-56 object-cover mx-auto rounded-xl shadow-xl"
                    />
                    <div className="py-2">
                        <h3 className="font-semibold text-sm text-gray-900 break-words">
                            {character.name}
                        </h3>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CharacterList;
