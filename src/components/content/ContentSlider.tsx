import type { ContentTypes } from "../../types/media";
import ContentCard from "./ContentCard";

export default function ContentSlider({ title, contents }: { title: string; contents: ContentTypes }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold px-2 border-l-4 border-indigo-600 ml-2">{title}</h1>
      <ul className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 hover:scrollbar-default transition-all">
        {contents.results.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </ul>
    </div>
  );
}
