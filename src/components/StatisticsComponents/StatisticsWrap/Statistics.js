import { FeedbackStatistics } from "./Statistics.styled";
import {ResultsDiagram} from "../ResultsDiagram/ResultsDiagram";
import { PercentageCupVidget } from "../PositivePersentageViget/PercentageVidget";

export const Statistics = ({good, neutral, bad, total, goodReviews, children}) => {
    return (
        <FeedbackStatistics>
            <ResultsDiagram good={good} neutral={neutral} bad={bad} total = {total}/>
            {children}
            <PercentageCupVidget percentage = {good} goodReviews = {goodReviews}/>
        </FeedbackStatistics>
    );
}