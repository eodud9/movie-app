import type { MovieTypes } from "../types/movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYxMzEyMWJjNTlmMWI4ZjYwYTAzZjRkNWM1NzMwMCIsIm5iZiI6MTc0Mjg3OTIzOS44MzksInN1YiI6IjY3ZTIzYTA3ZDQwNTJmNDc5M2RjNjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HViy1QPfchR5EJsNPg-VhSeQQl5lcYXRWDK8j127T08",
  },
};

const resNowPlaying = await fetch("https://api.themoviedb.org/3/movie/now_playing", options);
export const dataNowPlaying: MovieTypes = await resNowPlaying.json();

const resPopular = await fetch("https://api.themoviedb.org/3/movie/popular", options);
export const dataPopular: MovieTypes = await resPopular.json();

const resTopRated = await fetch("https://api.themoviedb.org/3/movie/top_rated", options);
export const dataTopRated: MovieTypes = await resTopRated.json();
