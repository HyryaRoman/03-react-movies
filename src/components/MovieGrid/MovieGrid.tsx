import css from "./MovieGrid.module.css";
import type { Movie } from "../types/movie.ts";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid(props: MovieGridProps) {
  function onSelect(ev) {
    if (props.onSelect) {
      const card = ev.target.closest(`.${css.card}`);
      const movie = props.movies.find(
        (m) => m.id === Number(card.dataset.movie),
      );
      if (movie) {
        props.onSelect(movie);
      }
    }
  }

  return (
    <ul className={css.grid} onClick={onSelect}>
      {props.movies.length > 0 &&
        props.movies.map((movie) => (
          <li key={movie.id}>
            <div className={css.card} data-movie={movie.id}>
              <img
                className={css.image}
                src={movie.poster_path}
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        ))}
    </ul>
  );
}
