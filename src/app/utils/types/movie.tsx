export interface MovieProps {
  name?: string; // Pode ser undefined
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  number_of_seasons: number;
  first_air_date: string;
  vote_average: number;
  genres: Genre[];
  runtime: number;
  revenue: number;
  trailer?: Trailer; // Nova propriedade para o trailer
}

export interface Genre {
  id: number;
  name: string;
}

// Nova interface para o trailer
export interface Trailer {
  key: string; 
  name: string;
  site: string;
  type: string;
}
