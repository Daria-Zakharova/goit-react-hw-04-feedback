import PropTypes from 'prop-types';
import { Data } from "./FeedbackData.styled";

export const FeedbackData = ({good, neutral, bad, total, goodPercentage}) => {
    
    
    return (
        <Data>
            <li>
                <span className="category">good</span>
                <span className="dots"></span>
                <span>{good}</span>
            </li><li>
                <span className="category">neutral</span>
                <span className="dots"></span>
                <span>{neutral}</span>
            </li>
            <li>
                <span className="category">bad</span>
                <span className="dots"></span>
                <span>{bad}</span>
            </li>            

            <li>
                <span className="category total">total</span>
                <span className="dots"></span>
                <span>{total}</span>
            </li>
            <li>
                <span className="category">positive feedback</span>
                <span className="dots"></span>
                <span>{goodPercentage}</span>
            </li>
        </Data>
    )
}

FeedbackData.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    goodPercentage: PropTypes.string.isRequired,
}