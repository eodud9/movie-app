import { useState, type ReactNode } from "react";
import { useLocation, useParams } from "react-router";
import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../api/media";
import Details from "../components/content/Details";
import DetailsSkeleton from "../components/ui/skeletons/DetailsSkeleton";
import TrailerSkeleton from "../components/ui/skeletons/TrailerSkeleton";
import SliderSkeletion from "../components/ui/skeletons/SliderSkeleton";
import TrailerModal from "../components/ui/TrailerModal";

export default function DetailsPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isMovie = pathname.startsWith("/movies");
  const type = isMovie ? "movie" : "tv";

  function openTrailer() {
    setIsOpen(true);
  }
  function closeTrailer() {
    setIsOpen(false);
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["details", type, id],
    queryFn: () => (isMovie ? getDetails(type, id!) : getDetails(type, id!)),
    enabled: !!id,
  });

  let content: ReactNode;
  let recommendations: ReactNode;
  let trailerVideo;

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
    trailerVideo = data.videos.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer" && video.key,
    );
    content = <Details data={data} modalOpen={openTrailer} />;
  }

  return (
    <div className="p-20">
      {isOpen && <TrailerModal videoKey={trailerVideo?.key} onClose={closeTrailer} />}
      {content}
      {recommendations}
    </div>
  );
}
