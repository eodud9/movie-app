import { Link } from "react-router";
import type { MovieTypes } from "../../types/movie";

export default function MovieGrid({ movies }: { movies: MovieTypes }) {
  return (
    <ul className="grid grid-cols-4 gap-15 justify-items-center algin-center">
      {movies?.results.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} className="flex flex-col items-center gap-5">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Movie Image"
              className="w-50 h-80"
            />
            <span className="font-semibold">{movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
