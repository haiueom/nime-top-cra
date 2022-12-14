import React from "react";

const List = (props) => {
  return (
    <>
      {props.data.map((anime, index) => (
        <div key={index.toString()} className="m-2 w-40 bg-white">
          <img
            alt={anime.name}
            src={anime.images.webp.image_url}
            title={anime.name}
            className="mx-auto h-60 w-56 rounded-xl object-cover shadow-xl"
          />
          <div className="py-2">
            <h3 className="break-words text-sm font-semibold text-gray-900">
              {anime["title"] ? anime.title : anime.name}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
