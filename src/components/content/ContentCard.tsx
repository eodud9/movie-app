import { Link } from "react-router";
import type { ContentResult } from "../../types/media";
import NoImg from "../../assets/no-image.png";
import { useFavoriteStore } from "../../store/favorite";

export default function ContentCard({ content }: { content: ContentResult }) {
  const posterUrl = content.poster_path ? `https://image.tmdb.org/t/p/w500/${content.poster_path}` : NoImg;
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const favorited = isFavorite(content.id);
  return (
    <li
      key={content.id}
      className="shrink-0 w-68 p-7 rounded bg-[#151B23] cursor-pointer hover:shadow-xl hover:shadow-indigo-700 hover:-translate-y-3 transition-all"
    >
      <Link
        to={`${content.name ? "/tv-shows/" : "/movies/"}${content.id}`}
        className="flex flex-col items-center gap-4 group"
      >
        <div className="relative overflow-hidden rounded-lg bg-[#151B23] transition-all duration-300 group-hover:-translate-y-2 group-hover:ring-2 group-hover:ring-indigo-500">
          <img
            src={posterUrl}
            alt={content.title || content.name}
            className="w-full h-80 object-cover rounded transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 text-xs font-bold rounded text-yellow-400">
            ⭐ {content.vote_average.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-col gap-1 px-1">
          <h3 className="text-lg font-semibold line-clamp-1">{content.title || content.name}</h3>
        </div>
      </Link>
      <div className="flex justify-between px-3 mt-5">
        <p className="text-xs text-gray-500 font-medium">
          {(content.release_date || content.first_air_date)?.split("-")[0]} ・ Movie
        </p>
        <button
          onClick={() => toggleFavorite(content.id)}
          className="cursor-pointer hover:scale-105 active:scale-95 transition-all"
        >
          {favorited ? "❤️" : "🤍"}
        </button>
      </div>
    </li>
  );
}
