import data from '../data/movies.json';
import MoviesGrid from '../components/css-modules/MoviesGrid';
import Page from '../components/css-modules/Page';
import Header from '../components/css-modules/Header';

function CSSModules() {
  return (
    <Page>
      <Header />
      <MoviesGrid movies={data} />
      <MoviesGrid movies={data} />
      <MoviesGrid movies={data} />
      <MoviesGrid movies={data} />
      <MoviesGrid movies={data} />
    </Page>
  );
}

export default CSSModules;
