export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYxMzEyMWJjNTlmMWI4ZjYwYTAzZjRkNWM1NzMwMCIsIm5iZiI6MTc0Mjg3OTIzOS44MzksInN1YiI6IjY3ZTIzYTA3ZDQwNTJmNDc5M2RjNjA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HViy1QPfchR5EJsNPg-VhSeQQl5lcYXRWDK8j127T08",
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
