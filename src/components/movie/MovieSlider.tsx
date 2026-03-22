import type { MovieTypes } from "../../types/movie";
import MovieCard from "./MovieCard";

export default function MovieSlider({ title, movies }: { title: string; movies: MovieTypes }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">{title}</h1>
      <ul className="flex gap-4 overflow-x-scroll px-5 py-10">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
