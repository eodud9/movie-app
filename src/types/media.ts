export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export interface ContentResult {
  id: number;
  backdrop_path: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  poster_path: string;
}

export interface ContentTypes {
  results: ContentResult[];
}

export interface ContentDetails {
  adult: boolean;
  backdrop_path: string;
  release_date?: string;
  first_air_date?: string;
  production_companies?: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  budget: 50000000;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  status: string;
  tagline: string;
  title?: string;
  name?: string;
  vote_average: number;
}
