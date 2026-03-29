import { useState } from "react";
import { useLocation, useParams } from "react-router";
import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../api/media";
import Details from "../components/content/Details";
import DetailsSkeleton from "../components/ui/skeletons/DetailsSkeleton";
import SliderSkeletion from "../components/ui/skeletons/SliderSkeleton";
import TrailerModal from "../components/ui/TrailerModal";

export default function DetailsPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const type = pathname.startsWith("/movies") ? "movie" : "tv";

  function openTrailer() {
    setIsOpen(true);
  }
  function closeTrailer() {
    setIsOpen(false);
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["details", type, id],
    queryFn: () => getDetails(type, id!),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="p-4 md:p-20">
        <DetailsSkeleton />
        <SliderSkeletion />
      </div>
    );

  if (isError || !data)
    return (
      <div className="p-4 md:p-20 text-center">
        <p>문제가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
      </div>
    );

  const trailerVideo = data.videos.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer" && video.key,
  );

  return (
    <div className="p-4 md:p-20">
      {isOpen && <TrailerModal videoKey={trailerVideo?.key} onClose={closeTrailer} />}
      <Details data={data} modalOpen={openTrailer} />
      <ContentSlider contents={data.recommendations} title="추천 목록" />
    </div>
  );
}
