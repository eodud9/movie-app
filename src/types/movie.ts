export interface MovieResult {
  id: number;
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface MovieTypes {
  results: MovieResult[];
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  release_date: string;
  production_companies: {
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
  id: 1290821;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
}
