import type { ReactNode } from "react";
import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import { getTvShows } from "../api/media";
import SliderSkeletion from "../components/ui/skeletons/SliderSkeleton";

export default function TvShowPage() {
  const {
    data: tvShows,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tv-shows"],
    queryFn: getTvShows,
  });

  let content: ReactNode;

  if (isLoading)
    return (
      <>
        <SliderSkeletion />
        <SliderSkeletion />
        <SliderSkeletion />
      </>
    );

  if (isError || !tvShows) content = <p>Error!: {error?.message}</p>;

  return (
    <section className="flex flex-col  p-7 md:p-20 gap-2 md:gap-10">
      <>
        <ContentSlider title="오늘 방송되는 TV 시리즈" contents={tvShows!.airingToday} />
        <ContentSlider title="지금 뜨겁게 방영 중!" contents={tvShows!.onTheAir} />
        <ContentSlider title="지금 가장 인기 있는 작품" contents={tvShows!.popular} />
        <ContentSlider title="놓치면 안될 최고의 평점작" contents={tvShows!.top_rated} />
      </>
    </section>
  );
}
