import React from "react";
import './Statistics.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<ul className='Statistics__list'>
<li><p>Good: {good}</p></li>
<li><p>Neutral: {neutral}</p></li>
<li><p>Bad: {bad}</p></li>
<li><p>Total: {total}</p></li>
<li><p>Positive feedback: {positivePercentage}%</p></li>
  </ul>     
);

export default Statistics;