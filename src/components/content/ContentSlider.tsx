import type { ContentTypes } from "../../types/media";
import ContentCard from "./ContentCard";

export default function ContentSlider({ title, contents }: { title: string; contents: ContentTypes }) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <ul className="flex gap-4 overflow-x-scroll scroll-smooth p-6">
        {contents.results.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </ul>
    </div>
  );
}
