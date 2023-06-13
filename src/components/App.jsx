// import { Component } from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeeedbackOption } from './FeeedbackOption/FeeedbackOption';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onCount = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('error');
    }
  };
  const positivFeedback = () => {
    if (countTotalFeedback() > 0) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
    return 0;
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const persentage = positivFeedback();

  return (
    <div>
      <Section title="Pleace leave feedback">
        <FeeedbackOption options={options} onLeaveFeedback={onCount} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            persentage={persentage}
          />
        ) : (
          <Notification messege="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
