import { type ReactNode } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../api/movie";

import MovieSlider from "../components/movie/MovieSlider";
import { useQuery } from "@tanstack/react-query";

export default function DetailsPage() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => getMovieDetails(id!),
  });

  let content: ReactNode;
  let recommendations: ReactNode;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) content = <p>Error! : {error.message}</p>;

  if (data) {
    recommendations = <MovieSlider movies={data?.recommendations} title="추천 목록" />;
    content = (
      <div className="bg-[#151B23] p-15 flex gap-10 mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.movieDetails.poster_path}`}
          alt="Movie Image"
          className="w-130 h-150 rounded"
        />
        <section className="flex flex-col items-center gap-8 p-10">
          <h1 className="font-extrabold text-7xl uppercase">{data.movieDetails.title}</h1>
          <p className="text-3xl font-semibold">{data.movieDetails.tagline}</p>
          <p className="flex gap-10">
            <span className="p-1 border-b">{data.movieDetails.release_date}</span>
            <span className="p-1 border-b">{data.movieDetails.vote_average} ⭐️</span>
            <span className="p-1 border-b">Produce by: {data.movieDetails.production_companies[0].name}</span>
          </p>
          <p className="w-full text-xl text-center font-light">{data.movieDetails.overview}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="p-20">
      {content}
      {recommendations}
    </div>
  );
}
