import { Link } from "react-router";
import type { ContentResult } from "../../types/media";

export default function ContentCard({ content }: { content: ContentResult }) {
  return (
    <li
      key={content.id}
      className="shrink-0 w-70 p-7 rounded bg-[#151B23] cursor-pointer hover:shadow-2xl hover:shadow-indigo-700 hover:-translate-y-4 transition-all"
    >
      <Link
        to={`${content.name ? "/tv-shows/" : "/movies/"}${content.id}`}
        className="flex flex-col items-center gap-4"
      >
        <img
          src={
            content.poster_path
              ? `https://image.tmdb.org/t/p/original/${content.poster_path}`
              : "../src/assets/no-image.png"
          }
          alt="Movie Image"
          className={content.poster_path ? "w-full h-80" : "w-full"}
        />
        <span className="w-full text-center text-lg font-semibold">{content.title || content.name}</span>
        <span>⭐️・{content.vote_average.toFixed(1)}</span>
      </Link>
    </li>
  );
}
