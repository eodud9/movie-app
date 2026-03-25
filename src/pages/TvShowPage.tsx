import type { ReactNode } from "react";
import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { getTvShows } from "../api/media";

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

  if (isLoading) content = <LoadingSpinner />;

  if (isError) content = <p>Error!: {error.message}</p>;

  if (tvShows)
    content = (
      <>
        <ContentSlider title="금일 생방송 티비 시리즈" contents={tvShows.airingToday} />
        <ContentSlider title="방영 티비 시리즈" contents={tvShows.onTheAir} />
        <ContentSlider title="인기 티비 시리즈" contents={tvShows.popular} />
        <ContentSlider title="최고의 평점" contents={tvShows.top_rated} />
      </>
    );

  return <section className="flex flex-col p-20 gap-10">{content}</section>;
}
