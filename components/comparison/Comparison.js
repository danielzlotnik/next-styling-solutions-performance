import React, { useEffect, useState } from 'react';
import { load } from './performance-loader';
import styles from './Comparison.module.scss';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Comparison({ count }) {
  const [styledComponentsResults, setStyledComponentsResults] = useState([]);
  const [cssModulesResults, setCssModulesResults] = useState([]);
  const [loading, setLoading] = useState(true);

  async function runPerformanceTests() {
    const styledComponentsResults = await load('/styled-components', count);
    const cssModulesResults = await load('/css-modules', count);

    setStyledComponentsResults(styledComponentsResults);
    setCssModulesResults(cssModulesResults);
    setLoading(false);
  }

  useEffect(runPerformanceTests, []);

  return (
    <div className={styles.grid}>
      <div />
      <h2>Styled components</h2>
      <h2>CSS Modules</h2>
      {loading ? (
        <>
          <div />
          <CountdownCircleTimer
            isPlaying
            duration={count / 2}
            colors={['#f5c518', '#8b0000', '#f5c518', '#8b0000']}
            colorsTime={[count / 2, count / 3, count / 4, count / 5]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <div />
        </>
      ) : (
        <Results styledComponents={styledComponentsResults} cssModules={cssModulesResults} />
      )}
    </div>
  );
}

function Results({ styledComponents, cssModules }) {
  const styledComponentsAvg = calculateAverage(styledComponents);
  const cssModulesAvg = calculateAverage(cssModules);

  return (
    <>
      {cssModules.map((_, index) => (
        <>
          <div>{index}</div>
          <div style={resolveStyles(styledComponents[index], cssModules[index])}>
            {styledComponents[index]}
          </div>
          <div style={resolveStyles(cssModules[index], styledComponents[index])}>
            {cssModules[index]}
          </div>
        </>
      ))}
      <div>avg</div>
      <div style={resolveStyles(styledComponentsAvg, cssModulesAvg)}>{styledComponentsAvg}</div>
      <div style={resolveStyles(cssModulesAvg, styledComponentsAvg)}>{cssModulesAvg}</div>
    </>
  );
}

function resolveStyles(current, opposite) {
  return {
    color: current < opposite ? '#76c490' : '#c4514f',
  };
}

function calculateAverage(results) {
  const sum = results.reduce((total, current) => total + current, 0);
  return (sum / results.length).toFixed(3);
}

export default Comparison;
