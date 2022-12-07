import React, {Component} from "react";
import { AppCard } from "./App.styled";
import { Section } from "../Section/Section";
import { FeedbackButttons } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../StatisticsComponents/StatisticsWrap/Statistics";

export class App extends Component {
  constructor () {
    super();
    this.state = {
    good: 0, 
    neutral: 0, 
    bad: 0,
  }

   
}

  setFeedbackAmount = (e) => {
    const clickedBtn = e.target.closest('button');
    this.setState({[clickedBtn.id]: this.state[clickedBtn.id] + 1});
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, cur) => { return sum += cur});
  }


  render() {
    const total = this.countTotalFeedback();

    return (
      <AppCard>

        <Section sectionTitle={"please leave feedback"}>
          <FeedbackButttons options = {['good', 'neutral', 'bad']} onLeaveFeedback={this.setFeedbackAmount}/>
        </Section>

        <Section>
          <Statistics good = {this.state.good} neutral = {this.state.neutral} bad = {this.state.bad} total = {total}/>
        </Section>
        
      </AppCard>
    );
  }
};
