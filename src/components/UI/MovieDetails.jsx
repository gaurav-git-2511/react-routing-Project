import { useLoaderData, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const movieData = useLoaderData();
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <main className="flex justify-center px-4 py-6">
      <div className="w-full max-w-3xl space-y-6">
        {/* Back Button */}
        <div>
          <button
            onClick={handleBackNavigation}
            className="px-4 py-2 bg-violet-600 text-white font-medium rounded hover:bg-violet-700 transition duration-200"
          >
            ← Go Back
          </button>
        </div>

        {/* Movie Card */}
        <article
          className="bg-white rounded-xl shadow-lg overflow-hidden w-full flex flex-col md:flex-row gap-6 p-6"
          aria-labelledby="movie-title"
        >
          {/* Poster */}
          <figure className="flex-shrink-0">
            <img
              src={movieData.Poster}
              alt={`${movieData.Title} movie poster`}
              className="w-full md:w-64 h-auto rounded-lg object-cover"
            />
          </figure>

          {/* Details */}
          <section className="flex-1 space-y-2 text-gray-800">
            <h1 id="movie-title" className="text-2xl font-bold mb-2">
              {movieData.Title}
            </h1>
            <p><strong>Actors:</strong> {movieData.Actors}</p>
            <p><strong>Country:</strong> {movieData.Country}</p>
            <p><strong>Director:</strong> {movieData.Director}</p>
            <p><strong>Genre:</strong> {movieData.Genre}</p>
            <p><strong>Language:</strong> {movieData.Language}</p>
            <p><strong>Writer:</strong> {movieData.Writer}</p>
            <p><strong>Ratings:</strong> {movieData.Ratings?.[0]?.Value || 'N/A'}</p>
            <p><strong>Year:</strong> {movieData.Year}</p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default MovieDetails;
