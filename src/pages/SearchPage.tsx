import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSearchMovies } from "../api/media";
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

  if (isLoading) return <SearchSkeleton />;

  if (isError || !movies) return <p>Error! : {error?.message}</p>;

  return (
    <div className="flex flex-col p-7 md:p-20">
      <>
        <h1 className="font-bold text-4xl mb-10">검색 결과: {search}</h1>
        <ConetentGrid contents={movies!} />
      </>
    </div>
  );
}
