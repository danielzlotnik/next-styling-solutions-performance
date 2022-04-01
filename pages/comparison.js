import Page from '../components/styled-components/Page';
import Header from '../components/styled-components/Header';
import Comparison from '../components/comparison/Comparison';

function ComparisonPage({ count = 20 }) {
  return (
    <Page>
      <Header />
      <Comparison count={count} />
    </Page>
  );
}

export function getServerSideProps({ query }) {
  return {
    props: { count: query.count },
  };
}

export default ComparisonPage;
