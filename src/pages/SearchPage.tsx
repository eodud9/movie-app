import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { getSearchMovies } from "../api/movie";
import type { MovieTypes } from "../types/movie";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<MovieTypes>();

  const search = searchParams.get("q");

  useEffect(() => {
    async function getMovies() {
      const movies = await getSearchMovies(search || "");
      setMovies(movies);
    }
    getMovies();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="font-bold text-4xl mb-10">검색 결과: {search}</h1>
      <ul className="grid grid-cols-4 gap-15 justify-items-center algin-center">
        {movies?.results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Movie Image"
                className="w-50 h-80"
              />
              <span className="text-center">{movie.original_title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
