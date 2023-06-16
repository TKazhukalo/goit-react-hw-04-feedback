import React from 'react';
import { useState} from "react";
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (item) => {
    switch (item) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
   
const countTotalFeedback = () => {
  return good + neutral + bad;
}
const  countPositiveFeedbackPercentage = () => {
  const total= countTotalFeedback();
     return Math.round((good* 100)/total) || 0;
  }
const totalFeedback =countTotalFeedback();
const totalPercentage = countPositiveFeedbackPercentage();
const options = Object.keys({ good, neutral, bad });
return (<Container>
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={options}
      />
    </Section>
    <Section title="Statistics">
      {totalFeedback !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={totalPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  </Container>
  );
}

export default App;