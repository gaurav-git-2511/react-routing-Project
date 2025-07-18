import { useLoaderData } from 'react-router-dom'
import MovieCard from '../components/UI/MovieCard';

const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData)
  return (
    <ul  className='flex flex-wrap gap-6 justify-center p-6'>
      {moviesData.Search.map((curMovie) => (
        <MovieCard key={curMovie.imdbID} curMovie={curMovie} />
      ))}
    </ul>
  )
}

export default Movie