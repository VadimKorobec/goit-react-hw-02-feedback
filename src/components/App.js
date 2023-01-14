import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedbeck</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onBtnClick={this.onBtnClick}
        />
        <h2>Statistics</h2>
        <Statistics />
      </div>
    );
  }
}
