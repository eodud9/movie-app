import { Link } from "react-router";
import type { ContentResult } from "../../types/media";

export default function ContentCard({ content }: { content: ContentResult }) {
  return (
    <li
      key={content.id}
      className="shrink-0 w-70 p-7 rounded bg-[#151B23] cursor-pointer hover:shadow-xl hover:shadow-indigo-700 hover:-translate-y-4 transition-all"
    >
      <Link
        to={`${content.name ? "/tv-shows/" : "/movies/"}${content.id}`}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <img
            src={
              content.poster_path
                ? `https://image.tmdb.org/t/p/original/${content.poster_path}`
                : "../src/assets/no-image.png"
            }
            alt="Movie Image"
            className={content.poster_path ? "w-full h-80 rounded" : "w-full"}
          />
          <span className="absolute top-2 right-2 bg-black/60 px-2 py-1 text-sm rounded transition-all">
            ⭐ {content.vote_average.toFixed(1)}
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold line-clamp-1">{content.title || content.name}</h3>
        </div>
        <p className="text-sm text-gray-400">{content.release_date || content.first_air_date}</p>
      </Link>
    </li>
  );
}
