import { Link } from "react-router";
import type { ContentDetails, ContentResult } from "../../types/media";

export type ContentItem = ContentResult | ContentDetails;

export default function ContentGrid({ contents }: { contents: ContentItem[] }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full">
      {contents?.map((content) => (
        <li key={content.id} className="group">
          <Link to={`/movies/${content.id}`} className="flex flex-col gap-3">
            <div className="relative aspect-2/3 overflow-hidden rounded-xl bg-[#151B23]">
              <img
                src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                alt="Movie Image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-1">
              <span className="font-bold text-lg line-clamp-1 group-hover:text-indigo-400 transition-colors">
                {content.title}
              </span>
              <span className="text-sm text-gray-500">
                {(content.first_air_date || content.release_date)?.split("-")[0]}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
