import { Grid } from './MoviesGrid.styles';

import MovieCard from '../MovieCard';

export default function MoviesGrid({ movies }) {
  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard key={movie.name} movie={movie} />
      ))}
    </Grid>
  );
}
