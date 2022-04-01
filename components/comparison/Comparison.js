import { useEffect, useState } from 'react';
import { load } from './performance-loader';

function Comparison({ count }) {
  const [styledComponentsResults, setStyledComponentsResults] = useState([]);
  const [cssModulesResults, setCssModulesResults] = useState([]);

  async function runPerformanceTests() {
    const styledComponentsResults = await load('/styled-components', count);
    const cssModulesResults = await load('/css-modules', count);

    setStyledComponentsResults(styledComponentsResults);
    setCssModulesResults(cssModulesResults);
  }

  useEffect(runPerformanceTests, []);

  return (
    <div>
      <div>
        <h1>Styled components</h1>
        <div>{JSON.stringify(styledComponentsResults)}</div>
      </div>
      <div>
        <h1>CSS Modules</h1>
        <div>{JSON.stringify(cssModulesResults)}</div>
      </div>
    </div>
  );
}

export default Comparison;
