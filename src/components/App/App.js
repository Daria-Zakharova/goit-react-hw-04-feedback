import React, {Component, useState} from "react";
import { AppCard } from "./App.styled";
import { Section } from "../Section/Section";
import { FeedbackButttons } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../StatisticsComponents/StatisticsWrap/Statistics";


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const setFeedbackAmount = e => {
    const typeOfFeedback = e.target.closest('button').id;
    switch (typeOfFeedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }


  return (
    <AppCard>

      <Section sectionTitle={"please leave feedback"}>
        <FeedbackButttons options = {['good', 'neutral', 'bad']} onLeaveFeedback={setFeedbackAmount}/>
      </Section>

      <Section>
        <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total}/>
      </Section>
      
    </AppCard>
  );
};