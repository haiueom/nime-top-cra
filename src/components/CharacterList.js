import React from "react";

const CharacterList = (props) => {
  return (
    <>
      {props.data.map((character, index) => (
        <div className="m-2 w-40 bg-white">
          <img
            title={character.name}
            alt={"Image " + character.name}
            src={character.images.webp.image_url}
            className="mx-auto h-60 w-56 rounded-xl object-cover shadow-xl"
          />
          <div className="py-2">
            <h3 className="break-words text-sm font-semibold text-gray-900">
              {character.name}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default CharacterList;
