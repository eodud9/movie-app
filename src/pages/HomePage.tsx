import { useEffect, useState } from "react";
import { getNowPlaying, getPopular, getTopRated } from "../api/movie";
import MovieSlider from "../components/movie/MovieSlider";
import type { MovieTypes } from "../types/movie";

interface Movies {
  nowPlaying: MovieTypes;
  popular: MovieTypes;
  topRated: MovieTypes;
}

export default function HomePage() {
  const [movies, setMovies] = useState<Movies>();
  useEffect(() => {
    async function getMovies() {
      const nowPlaying = await getNowPlaying();
      const popular = await getPopular();
      const topRated = await getTopRated();

      setMovies({ nowPlaying, popular, topRated });
    }
    getMovies();
  }, []);

  return (
    <section className="flex flex-col p-20 gap-10">
      {movies && (
        <>
          <MovieSlider title="Now Playing" movies={movies.nowPlaying} />
          <MovieSlider title="Popular" movies={movies.popular} />
          <MovieSlider title="Top Rated" movies={movies.topRated} />
        </>
      )}
    </section>
  );
}
