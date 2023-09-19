import React from 'react';
import css from './Counter.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';


export class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div className={css.counter}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback} />
        </Section>

        <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
      </div>
    );
  }
}
