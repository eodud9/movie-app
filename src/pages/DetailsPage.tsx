import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../api/movie";
import type { MovieDetails } from "../types/movie";

export default function DetailsPage() {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    async function fetchMovieDetails() {
      const data = await getMovieDetails(id!);
      setMovieDetails(data);
    }
    fetchMovieDetails();
  }, []);

  return (
    <div className="p-20">
      {movieDetails && (
        <div className="bg-[#151B23] p-15 flex gap-10">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            alt="Movie Image"
            className="w-130 h-150 rounded"
          />
          <section className="flex flex-col items-center gap-8 p-10">
            <h1 className="font-extrabold text-7xl uppercase">{movieDetails.title}</h1>
            <p className="text-3xl font-semibold">{movieDetails.tagline}</p>
            <p className="flex gap-10">
              <span className="p-1 border-b">{movieDetails.release_date}</span>
              <span className="p-1 border-b">{movieDetails.vote_average} ⭐️</span>
              <span className="p-1 border-b">Produce by: {movieDetails.production_companies[0].name}</span>
            </p>
            <p className="w-full text-xl text-center font-light">{movieDetails.overview}</p>
          </section>
        </div>
      )}
    </div>
  );
}
