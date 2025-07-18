import React from 'react';

const MovieCard = ({ curMovie }) => {
  return (
    <li className="flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-[0_20px_30px_-10px_rgba(0,0,0,0.4)] 
                  overflow-hidden w-[240px] h-[440px] flex flex-col 
                  transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
        
        {/* Poster */}
        <div className="overflow-hidden">
          <img
            src={curMovie.Poster}
            alt={curMovie.imdbID}
            className="w-full h-[320px] object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Movie Info */}
        <div className="p-2 flex-1 flex flex-col items-center justify-between text-center">
          <h2 className="text-md font-semibold line-clamp-2">{curMovie.Title}</h2>
          <p className="text-sm text-gray-500">Year: {curMovie.Year}</p>
        </div>

        {/* Button */}
        <div className="bg-black text-white text-center py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
          Watch Now
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
