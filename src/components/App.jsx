import React, { Component } from 'react';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  render() {
    return (
      <div className='Feedback__leave'>
        <p>Please leave feedback</p>
        <ul className='Feedback__buttons'> 
          <li><button className='Good' type='button'>Good</button></li>
          <li><button className='Neutral' type='button'>Neutral</button></li>
          <li><button className='Bad' type='button'>Bad</button></li>
        </ul>
        <h2 className='Statistics__title'>Statistics</h2>
        <ul className='Statistics__list'>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
  </div>
)
  }
}

export default App;