import { type ReactNode } from "react";
import { useLocation, useParams } from "react-router";
import { getMovieDetails } from "../api/movie";

import ContentSlider from "../components/content/ContentSlider";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { getTvDetails } from "../api/tv";

//movie tv 다르게 함수 호출

export default function DetailsPage() {
  const { id } = useParams();
  const { pathname } = useLocation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => (pathname.startsWith("/movies") ? getMovieDetails(id!) : getTvDetails(id!)),
  });

  let content: ReactNode;
  let recommendations: ReactNode;
  let trailer: ReactNode;

  if (isLoading) content = <LoadingSpinner />;

  if (isError) content = <p>Error! : {error.message}</p>;

  if (data) {
    recommendations = <ContentSlider contents={data?.recommendations} title="추천 목록" />;
    trailer = (
      <>
        <h1 className="font-bold text-5xl">예고편</h1>
        <div className="py-10">
          {data.videos.results.length > 0 && data.videos.results[0].site === "YouTube" ? (
            <iframe
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allowFullScreen
              className="w-full h-200"
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
