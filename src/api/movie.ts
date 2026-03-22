import type { MovieDetails, MovieTypes } from "../types/movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYxMzEyMWJjNTlmMWI4ZjYwYTAzZjRkNWM1NzMwMCIsIm5iZiI6MTc0Mjg3OTIzOS44MzksInN1YiI6IjY3ZTIzYTA3ZDQwNTJmNDc5M2RjNjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HViy1QPfchR5EJsNPg-VhSeQQl5lcYXRWDK8j127T08",
  },
};

export async function getNowPlaying(): Promise<MovieTypes> {
  const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", options);
  return res.json();
}

export async function getPopular(): Promise<MovieTypes> {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", options);
  return res.json();
}

export async function getTopRated(): Promise<MovieTypes> {
  const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", options);
  return res.json();
}

export async function getMovieDetails(movieId: string) {
  const res = await fetch("https://api.themoviedb.org/3/movie/" + movieId, options);
  return res.json();
}
