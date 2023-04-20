import React, { useRef } from 'react';
import Button from './Button';
import { useState } from 'react';

import MetricOne from './MetricOne';

const Broker = ({ name, metrics, showing }) => {
  // useState to toggle visibility of broker metrics
  const [isShowing, setIsShowing] = useState(showing);
  // if button is clicked, changes if it is showing or not
  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  // map passed in metrics to an array of metric components,
  // each component will be a specific metric for that broker.
  const brokerMetrics = metrics.map((metric) => (
    <MetricOne name={metric.stat} alerting={metric.alerting} />
  ));
  // style={{'background-color': {metric.altering ? 'salmon' : 'skyblue'}}}
  return (
    <section className='broker container' id={name.replace(/\s+/g, '-').toLowerCase()}>
      <h3>{name}</h3>
      {isShowing ? <div className='broker-metrics'>{brokerMetrics}</div> : null}
      <Button onPress={() => handleClick()}>Show/Hide Metrics</Button>
    </section>
  );
};

export default Broker;
