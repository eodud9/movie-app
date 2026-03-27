import { type ReactNode } from "react";
import { useLocation, useParams } from "react-router";
import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../api/media";
import Trailer from "../components/ui/Trailer";
import Details from "../components/content/Details";
import DetailsSkeleton from "../components/ui/skeletons/DetailsSkeleton";
import TrailerSkeleton from "../components/ui/skeletons/TrailerSkeleton";
import SliderSkeletion from "../components/ui/skeletons/SliderSkeleton";

export default function DetailsPage() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const isMovie = pathname.startsWith("/movies");
  const type = isMovie ? "movie" : "tv";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["details", type, id],
    queryFn: () => (isMovie ? getDetails(type, id!) : getDetails(type, id!)),
    enabled: !!id,
  });

  let content: ReactNode;
  let recommendations: ReactNode;
  let trailer: ReactNode;

  if (isLoading)
    content = (
      <>
        <DetailsSkeleton />
        <TrailerSkeleton />
        <SliderSkeletion />
      </>
    );

  if (isError)
    content = (
      <div>
        <p>문제가 발생했습니다!</p>
        <p>잠시후 다시 시도해주세요!</p>
      </div>
    );

  if (data) {
    recommendations = <ContentSlider contents={data?.recommendations} title="추천 목록" />;
    const trailerVideo = data.videos.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer" && video.key,
    );
    trailer = <Trailer videoKey={trailerVideo?.key} />;
    content = <Details data={data} />;
  }

  return (
    <div className="p-20">
      {content}
      {trailer}
      {recommendations}
    </div>
  );
}
