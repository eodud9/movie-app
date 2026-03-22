import { Link } from "react-router";
import type { MovieResult } from "../../types/movie";

export default function MovieCard({ movie }: { movie: MovieResult }) {
  return (
    <li
      key={movie.id}
      className="shrink-0 p-7 rounded bg-[#151B23] cursor-pointer hover:bg-amber-800 hover:-translate-y-4 transition-all"
    >
      <Link to={`/movie/${movie.id}`} className="flex flex-col items-center gap-4">
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie Image" className="w-50 h-80" />
        <span className="max-w-11/12 text-center text-lg font-semibold">{movie.title}</span>
      </Link>
    </li>
  );
}
