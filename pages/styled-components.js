import styled from 'styled-components';

import data from '../data/movies.json';
import MoviesGrid from '../components/styled-components/MoviesGrid';
import Page from '../components/styled-components/Page';
import Header from '../components/styled-components/Header';

function StyledComponents() {
  return (
    <Page>
      <Header />
      <MoviesGrid movies={data} />
    </Page>
  );
}

export default StyledComponents;
