import { Link } from "react-router";
import type { ContentTypes } from "../../types/media";

export default function ContentGrid({ contents }: { contents: ContentTypes }) {
  return (
    <ul className="grid grid-cols-4 gap-15 justify-items-center algin-center">
      {contents?.results.map((content) => (
        <li key={content.id}>
          <Link to={`/movies/${content.id}`} className="flex flex-col items-center gap-5">
            <img
              src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
              alt="Movie Image"
              className="w-50 h-80"
            />
            <span className="font-semibold">{content.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
