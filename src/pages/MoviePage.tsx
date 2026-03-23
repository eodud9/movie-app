import MovieSlider from "../components/movie/MovieSlider";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/movie";
import type { ReactNode } from "react";

export default function MoviePage() {
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  let content: ReactNode;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) content = <p>Error!: {error.message}</p>;

  if (movies)
    content = (
      <>
        <MovieSlider title="상영 영화" movies={movies.nowPlaying} />
        <MovieSlider title="인기 영화" movies={movies.popular} />
        <MovieSlider title="최고의 평점" movies={movies.topRated} />
      </>
    );

  return <section className="flex flex-col p-20 gap-10">{content}</section>;
}
