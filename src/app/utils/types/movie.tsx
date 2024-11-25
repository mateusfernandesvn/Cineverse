export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  runtime: number;
  revenue: number;
}

export interface Genre {
  id: number;
  name: string;
}
