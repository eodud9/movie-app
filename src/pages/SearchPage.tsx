import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSearchMovies } from "../api/media";
import type { ReactNode } from "react";
import ConetentGrid from "../components/content/ContentGrid";
import SearchSkeleton from "../components/ui/skeletons/SearchSkeleton";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["search", search],
    queryFn: () => getSearchMovies(search || ""),
  });

  let content: ReactNode;

  if (isLoading) content = <SearchSkeleton />;

  if (isError) content = <p>Error! : {error.message}</p>;

  if (movies)
    content = (
      <>
        <h1 className="font-bold text-4xl mb-10">검색 결과: {search}</h1>
        <ConetentGrid contents={movies} />
      </>
    );

  return <div className="flex flex-col items-center justify-center p-10">{content}</div>;
}
