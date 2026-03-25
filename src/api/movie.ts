import { options, type ContentDetails, type ContentTypes } from "../types/movie";

interface Movies {
  nowPlaying: ContentTypes;
  popular: ContentTypes;
  topRated: ContentTypes;
}

interface MovieDetailsResult {
  details: ContentDetails;
  recommendations: ContentTypes;
  videos: {
    id: number;
    results: { name: string; key: string; site: string }[];
  };
}

export async function getMovies(): Promise<Movies> {
  const nowPlaying = await (await fetch("https://api.themoviedb.org/3/movie/now_playing?language=ko", options)).json();
  const popular = await (await fetch("https://api.themoviedb.org/3/movie/popular?language=ko", options)).json();
  const topRated = await (await fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko", options)).json();
  return { nowPlaying, popular, topRated };
}

export async function getMovieDetails(movieId: string): Promise<MovieDetailsResult> {
  const details = await (await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=ko", options)).json();
  const recommendations = await (
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=ko&page=1`, options)
  ).json();
  const videos = await (
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=ko`, options)
  ).json();
  return { details, recommendations, videos };
}

export async function getSearchMovies(searchParams: string): Promise<ContentTypes> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=ko&page=1`,
    options,
  );
  return res.json();
}
