import type { MovieDetails, MovieTypes } from "../types/movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYxMzEyMWJjNTlmMWI4ZjYwYTAzZjRkNWM1NzMwMCIsIm5iZiI6MTc0Mjg3OTIzOS44MzksInN1YiI6IjY3ZTIzYTA3ZDQwNTJmNDc5M2RjNjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HViy1QPfchR5EJsNPg-VhSeQQl5lcYXRWDK8j127T08",
  },
};

interface Movies {
  nowPlaying: MovieTypes;
  popular: MovieTypes;
  topRated: MovieTypes;
}

interface MovieDetailsResult {
  movieDetails: MovieDetails;
  recommendations: MovieTypes;
}

export async function getMovies(): Promise<Movies> {
  const nowPlaying = await (await fetch("https://api.themoviedb.org/3/movie/now_playing?language=ko", options)).json();
  const popular = await (await fetch("https://api.themoviedb.org/3/movie/popular?language=ko", options)).json();
  const topRated = await (await fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko", options)).json();
  return { nowPlaying, popular, topRated };
}

export async function getMovieDetails(movieId: string): Promise<MovieDetailsResult> {
  const movieDetails = await (
    await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=ko", options)
  ).json();
  const recommendations = await (
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=ko&page=1`, options)
  ).json();
  return { movieDetails, recommendations };
}

export async function getSearchMovies(searchParams: string): Promise<MovieTypes> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=ko&page=1`,
    options,
  );
  return res.json();
}
