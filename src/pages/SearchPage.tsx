import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSearchMovies } from "../api/movie";
import type { ReactNode } from "react";
import MovieGrid from "../components/movie/MovieGrid";

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

  if (isLoading) content = <p>Loading...</p>;

  if (isError) content = <p>Error! : {error.message}</p>;

  if (movies)
    content = (
      <>
        <h1 className="font-bold text-4xl mb-10">검색 결과: {search}</h1>
        <MovieGrid movies={movies} />
      </>
    );

  return <div className="flex flex-col items-center justify-center p-10">{content}</div>;
}
