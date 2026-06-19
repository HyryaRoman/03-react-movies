import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar.tsx";
import MovieGrid from "../MovieGrid/MovieGrid.tsx";
import styles from "./App.module.css";

import { fetchMovies } from "../../services/movieService.ts";

import type { Movie } from "../../types/movie.ts";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function onSearch(query: string) {
    const result = await fetchMovies(query);
    if (result.length > 0) {
      setMovies(result);
    } else {
      toast.error("No movies found for your request.");
    }
  }

  function onMovieSelect(movie: Movie) {
    console.log(movie);
  }

  return (
    <div className={styles.app}>
      <Toaster />
      <SearchBar onSubmit={onSearch} />
      <MovieGrid movies={movies} onSelect={onMovieSelect} />
    </div>
  );
}
