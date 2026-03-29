import { options, type ContentDetails, type ContentTypes } from "../types/media";

interface Movies {
  nowPlaying: ContentTypes;
  popular: ContentTypes;
  topRated: ContentTypes;
}

export interface MovieDetailsResult {
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

export interface TvshowsDetails {
  details: ContentDetails;
  recommendations: ContentTypes;
  videos: {
    id: number;
    results: { name: string; key: string; site: string; type: string }[];
  };
}

export async function getMovies(): Promise<Movies> {
  // 동시에 요청 날리기
  const [nowPlayingRes, popularRes, topRatedRes] = await Promise.all([
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=ko", options),
    fetch("https://api.themoviedb.org/3/movie/popular?language=ko", options),
    fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko", options),
  ]);

  return {
    nowPlaying: await nowPlayingRes.json(),
    popular: await popularRes.json(),
    topRated: await topRatedRes.json(),
  };
}

export async function getTvShows(): Promise<TvShows> {
  // 동시에 요청 날리기
  const [airingTodayRes, onTheAirRes, popularRes, topRatedRes] = await Promise.all([
    await fetch("https://api.themoviedb.org/3/tv/airing_today?language=ko", options),
    await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=ko", options),
    await fetch("https://api.themoviedb.org/3/tv/popular?language=ko", options),
    await fetch("https://api.themoviedb.org/3/tv/top_rated?language=ko", options),
  ]);

  return {
    airingToday: await airingTodayRes.json(),
    onTheAir: await onTheAirRes.json(),
    popular: await popularRes.json(),
    top_rated: await topRatedRes.json(),
  };
}

export async function getDetails(type: string, id: string): Promise<MovieDetailsResult | TvshowsDetails> {
  // 동시에 요청 날리기
  const [detailsRes, recommendationsRes, videosRes] = await Promise.all([
    await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=ko`, options),
    await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?language=ko&page=1`, options),
    await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos`, options),
  ]);

  return {
    details: await detailsRes.json(),
    recommendations: await recommendationsRes.json(),
    videos: await videosRes.json(),
  };
}

export async function getSearchMovies(searchParams: string): Promise<ContentTypes> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=ko&page=1`,
    options,
  );
  return res.json();
}
