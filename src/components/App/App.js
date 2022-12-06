import React, {Component} from "react";
import { getPercent } from "utils/percent-of-total";
import { AppCard } from "./App.styled";
import { Section } from "../Section/Section";
import { FeedbackButttons } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../StatisticsComponents/StatisticsWrap/Statistics";
import { FeedbackData } from "../StatisticsComponents/FeedbackData/FeedbackData";

export class App extends Component {
  constructor () {
    super();
    this.state = {
    good: 0, 
    neutral: 0, 
    bad: 0,
  }}

  setFeedbackAmount = (e) => {
    const clickedBtn = e.target.closest('button');
    this.setState({[clickedBtn.id]: this.state[clickedBtn.id] + 1});
  }

  render() {
    const total = Object.values(this.state).reduce((sum, cur) => { return sum += cur});
    const goodPercent = getPercent(this.state.good, total);
    const neutralPercent = getPercent(this.state.neutral, total);
    const badPercent = getPercent(this.state.bad, total);


    return (
      <AppCard>

        <Section sectionTitle={"cup rating"}>
          <FeedbackButttons onclick={this.setFeedbackAmount}/>
        </Section>

        <Section>
          <Statistics good = {goodPercent} neutral = {neutralPercent} bad = {badPercent} total = {total} goodReviews = {this.state.good}>
            <FeedbackData stats = {Object.entries(this.state)} total = {total}/>
          </Statistics>
        </Section>
        
      </AppCard>
    );
  }
};
