import styles from './MoviesGrid.module.scss';

import MovieCard from '../MovieCard';

export default function MoviesGrid({ movies }) {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.name} movie={movie} />
      ))}
    </div>
  );
}
