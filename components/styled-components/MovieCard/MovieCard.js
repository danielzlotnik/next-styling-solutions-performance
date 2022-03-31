import { Flex, Image, Title, Top, Wrapper } from './MovieCard.styles';

export default function MovieCard({ movie }) {
  return (
    <Wrapper href={`https://www.imdb.com${movie.imdb_url}`} target="_blank">
      <Image
        style={{
          backgroundImage: `url(${movie.thumb_url})`,
        }}
      />
      <Flex justify="space-between">
        <Title>{movie.name}</Title>
        <div>⭐&nbsp;{movie.rating}</div>
      </Flex>
    </Wrapper>
  );
}
