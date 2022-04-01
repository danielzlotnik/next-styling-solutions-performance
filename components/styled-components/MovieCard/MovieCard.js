import { Image, Row, Title, Wrapper } from './MovieCard.styles';

export default function MovieCard({ movie }) {
  return (
    <Wrapper href={`https://www.imdb.com${movie.imdb_url}`} target="_blank">
      <Image
        style={{
          backgroundImage: `url(${movie.thumb_url})`,
        }}
      />
      <Row>
        <Title>{movie.name}</Title>
        <div>⭐&nbsp;{movie.rating}</div>
      </Row>
    </Wrapper>
  );
}
