import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ curMovie }) => {


  return (
    <li className="flex flex-col items-center">
      <div
        className="group relative bg-white rounded-xl shadow-[0_20px_30px_-10px_rgba(0,0,0,0.4)]
        overflow-hidden w-[240px] flex flex-col transition-transform duration-300
        hover:scale-105 hover:shadow-2xl"
      >
        {/* Clickable NavLink Area */}
        <NavLink to={`/movie/${curMovie.imdbID}`} className="flex flex-col flex-1">
          {/* Poster */}
          <div className="overflow-hidden">
            <img
              src={curMovie.Poster}
              alt={curMovie.imdbID}
              className="w-full h-[320px] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Movie Info */}
          <div className="p-2 text-center">
            <h2 className="text-md font-semibold line-clamp-2">{curMovie.Title}</h2>
            <p className="text-sm text-gray-500">Year: {curMovie.Year}</p>
          </div>
        </NavLink>

        {/* Watch Now Button - Inside Card but Not Inside Link */}
        <button className="bg-black text-white text-center py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-300 w-full"
        >
          Watch Now
        </button>

        {/* Tooltip */}
        <div className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Know more
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
