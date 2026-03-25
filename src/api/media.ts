import { options, type ContentDetails, type ContentTypes } from "../types/media";

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
    results: { name?: string; key: string; site?: string; type: string }[];
  };
}

interface TvShows {
  airingToday: ContentTypes;
  onTheAir: ContentTypes;
  popular: ContentTypes;
  top_rated: ContentTypes;
}

interface TvshowsDetails {
  details: ContentDetails;
  recommendations: ContentTypes;
  videos: {
    id: number;
    results: { name: string; key: string; site: string; type: string }[];
  };
}

export async function getMovies(): Promise<Movies> {
  const nowPlaying = await (await fetch("https://api.themoviedb.org/3/movie/now_playing?language=ko", options)).json();
  const popular = await (await fetch("https://api.themoviedb.org/3/movie/popular?language=ko", options)).json();
  const topRated = await (await fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko", options)).json();
  return { nowPlaying, popular, topRated };
}

export async function getTvShows(): Promise<TvShows> {
  const airingToday = await (await fetch("https://api.themoviedb.org/3/tv/airing_today?language=ko", options)).json();
  const onTheAir = await (await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=ko", options)).json();
  const popular = await (await fetch("https://api.themoviedb.org/3/tv/popular?language=ko", options)).json();
  const top_rated = await (await fetch("https://api.themoviedb.org/3/tv/top_rated?language=ko", options)).json();

  return { airingToday, onTheAir, popular, top_rated };
}

export async function getDetails(type: string, id: string): Promise<MovieDetailsResult | TvshowsDetails> {
  const details = await (await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=ko`, options)).json();
  const recommendations = await (
    await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?language=ko&page=1`, options)
  ).json();
  const videos = await (await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos`, options)).json();
  return { details, recommendations, videos };
}

export async function getSearchMovies(searchParams: string): Promise<ContentTypes> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=ko&page=1`,
    options,
  );
  return res.json();
}
