import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnGoodButton = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  clickOnNeutralButton = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  clickOnBedButton = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    let positiveFeedbackPercentage = 0;
    console.log(`total`, total);
    total !== 0 &&
      (positiveFeedbackPercentage = Math.round(
        (Number(good) / Number(total)) * 100
      ));
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    
    return (
      <div className="Feedback__leave">
        <Section title="Please leave feedback">
 <FeedbackOptions onLeaveFeedbackGood={this.clickOnGoodButton} onLeaveFeedbackNeutral={this.clickOnNeutralButton} onLeaveFeedbackBad={this.clickOnBedButton}></FeedbackOptions>
        </Section>
        {total === 0
          ? <div> 
        <Section title="Statistics">
                  <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        </Section>       </div>
          :        <div>
<Notification message="There is no feedback!"></Notification> </div>}
      </div>
    );
  }
}

export default App;
