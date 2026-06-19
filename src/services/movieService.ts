import axios from "axios";
import type { AxiosInstance } from "axios";
import type { Movie } from "../types/movie.ts";

const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;
const DEBUG_MODE = import.meta.env.DEBUG_MODE || false;

const tmdb: AxiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    Authorization: TMDB_API_KEY,
  },
});

export async function fetchMovies(
  query: string,
  page: number = 0,
): Promise<Movie[]> {
  if (!DEBUG_MODE) {
    const response = await tmdb.get("/search/movie", {
      params: { query, page },
    });
    return response.data.results;
  } else {
    return [];
  }
}
