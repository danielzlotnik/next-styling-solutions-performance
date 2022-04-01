import styles from './MovieCard.module.scss';

export default function MovieCard({ movie }) {
  return (
    <a className={styles.wrapper} href={`https://www.imdb.com${movie.imdb_url}`} target="_blank">
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${movie.thumb_url})`,
        }}
      />
      <div className={styles.row}>
        <h2 className={styles.title}>{movie.name}</h2>
        <div>⭐&nbsp;{movie.rating}</div>
      </div>
    </a>
  );
}
