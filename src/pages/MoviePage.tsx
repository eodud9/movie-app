import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/media";
import type { ReactNode } from "react";
import SliderSkeletion from "../components/ui/skeletons/SliderSkeleton";

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

  if (isLoading)
    content = (
      <>
        <SliderSkeletion />
        <SliderSkeletion />
        <SliderSkeletion />
      </>
    );

  if (isError) content = <p>Error!: {error.message}</p>;

  if (movies)
    content = (
      <>
        <ContentSlider title="상영 영화" contents={movies.nowPlaying} />
        <ContentSlider title="인기 영화" contents={movies.popular} />
        <ContentSlider title="최고의 평점" contents={movies.topRated} />
      </>
    );

  return <section className="flex flex-col p-20 gap-10">{content}</section>;
}
