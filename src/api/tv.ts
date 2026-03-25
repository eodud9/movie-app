import { options, type ContentDetails, type ContentTypes } from "../types/movie";

interface TvShows {
  airingToday: ContentTypes;
  onTheAir: ContentTypes;
  popular: ContentTypes;
  top_rated: ContentTypes;
}

export async function getTvShows(): Promise<TvShows> {
  const airingToday = await (await fetch("https://api.themoviedb.org/3/tv/airing_today?language=ko", options)).json();
  const onTheAir = await (await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=ko", options)).json();
  const popular = await (await fetch("https://api.themoviedb.org/3/tv/popular?language=ko", options)).json();
  const top_rated = await (await fetch("https://api.themoviedb.org/3/tv/top_rated?language=ko", options)).json();

  return { airingToday, onTheAir, popular, top_rated };
}

interface TvshowsDetails {
  details: ContentDetails;
  recommendations: ContentTypes;
  videos: {
    id: number;
    results: { name: string; key: string; site: string; type: string }[];
  };
}

export async function getTvDetails(tvId: string): Promise<TvshowsDetails> {
  const details = await (await fetch(`https://api.themoviedb.org/3/tv/${tvId}?language=ko`, options)).json();
  const recommendations = await (
    await fetch(`https://api.themoviedb.org/3/tv/${tvId}/recommendations?language=ko&page=1`, options)
  ).json();
  const videos = await (await fetch(`https://api.themoviedb.org/3/tv/${tvId}/videos`, options)).json();
  return { details, recommendations, videos };
}
