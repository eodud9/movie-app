import { type ReactNode } from "react";
import { useLocation, useParams } from "react-router";

import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { getDetails } from "../api/media";

//movie tv 다르게 함수 호출

export default function DetailsPage() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["details", pathname.startsWith("/movie") ? "movie" : "tv", id],
    queryFn: () => (pathname.startsWith("/movies") ? getDetails("movies", id!) : getDetails("tv", id!)),
  });

  let content: ReactNode;
  let recommendations: ReactNode;
  let trailer: ReactNode;

  if (isLoading) content = <LoadingSpinner />;

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
    trailer = (
      <>
        <h1 className="font-bold text-5xl">예고편</h1>
        <div className="w-full aspect-video mx-auto p-10">
          {trailerVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailerVideo.key}`}
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <p>해당 컨텐츠는 예고편을 지원하지 않습니다 🥲</p>
          )}
        </div>
      </>
    );
    content = (
      <div className="bg-[#151B23] p-15 flex gap-10 mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.details.poster_path}`}
          alt="Movie Image"
          className="w-130 h-150 rounded"
        />
        <section className="flex flex-col items-center gap-8 p-10">
          <h1 className="font-extrabold text-7xl uppercase">{data.details.title || data.details.name}</h1>
          <p className="text-3xl font-semibold">{data.details.tagline}</p>
          <p className="flex gap-10">
            <span className="p-1 border-b">{data.details.release_date || data.details.first_air_date}</span>
            <span className="p-1 border-b">⭐️・{data.details.vote_average.toFixed(1)}</span>
            <span className="p-1 border-b">
              {data.details.production_companies && "Produce by: " + data.details.production_companies[0].name}
            </span>
          </p>
          <p className="w-full text-xl text-center font-light">{data.details.overview}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="p-20">
      {content}
      {trailer}
      {recommendations}
    </div>
  );
}
