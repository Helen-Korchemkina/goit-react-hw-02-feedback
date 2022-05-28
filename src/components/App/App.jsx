import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

    total !== 0 &&
      (positiveFeedbackPercentage = Math.round(
        (Number(good) / Number(total)) * 100
      ));
    return positiveFeedbackPercentage;
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div className={s.Feedback__leave}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total !== 0 ? (
          <div>
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            </Section>{' '}
          </div>
        ) : (
          <div>
            <Notification message="There is no feedback!"></Notification>{' '}
          </div>
        )}
      </div>
    );
  }
}

export default App;
