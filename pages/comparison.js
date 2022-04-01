import Page from '../components/styled-components/Page';
import Comparison from '../components/comparison/Comparison';

function ComparisonPage({ count = 15 }) {
  return (
    <Page>
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
