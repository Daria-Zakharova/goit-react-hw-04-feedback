import PropTypes from 'prop-types';
import { FeedbackStatistics } from "./Statistics.styled";
import { Notification } from "../Notification/Notification";
import {ResultsDiagram} from "../ResultsDiagram/ResultsDiagram";
import { FeedbackData } from "../FeedbackData/FeedbackData";
import { PercentageCupVidget } from "../PositivePersentageViget/PercentageVidget";
import { getPercent } from "../../../utils/percent-of-total";


export const Statistics = ({good, neutral, bad, total}) => {
    const goodPercent = getPercent(good, total);
    const neutralPercent = getPercent(neutral, total);
    const badPercent = getPercent(bad, total);
    const goodPercentStr = `${goodPercent.toFixed()}%`;

    return (
        <FeedbackStatistics>
            { !total ? <Notification message = 'No feedback given'/> :
                <>
                    <ResultsDiagram good={goodPercent} neutral={neutralPercent} bad={badPercent} total = {total}/>
                    <FeedbackData good={good} neutral={neutral} bad={bad} total = {total} goodPercentage = {goodPercentStr}/>
                    <PercentageCupVidget percentage = {goodPercent} percentageValue = {goodPercentStr}/>
                </>
            }
        </FeedbackStatistics>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};