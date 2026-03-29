import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/media";
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

  if (isLoading)
    return (
      <section className="flex flex-col p-20 gap-10">
        {[1, 2, 3].map((k) => (
          <SliderSkeletion key={k} />
        ))}
      </section>
    );

  if (isError || !movies) return <p className="p-20 text-center">Error!: {error?.message}</p>;

  return (
    <section className="flex flex-col  p-7 md:p-20 gap-2 md:gap-10">
      <ContentSlider title="지금 상영 중" contents={movies.nowPlaying} />
      <ContentSlider title="지금 가장 인기 있는 작품" contents={movies.popular} />
      <ContentSlider title="놓치면 안될 최고의 평점작" contents={movies.topRated} />
    </section>
  );
}
