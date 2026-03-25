import type { ContentTypes } from "../../types/movie";
import ContentCard from "./ContentCard";

export default function ContentSlider({ title, contents }: { title: string; contents: ContentTypes }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">{title}</h1>
      <ul className="flex gap-4 overflow-x-scroll px-5 py-10">
        {contents.results.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </ul>
    </div>
  );
}
