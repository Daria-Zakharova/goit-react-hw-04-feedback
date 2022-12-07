import PropTypes from 'prop-types';
import { Diagram } from "./ResultsDiagram.styled";

export const ResultsDiagram = ({good, neutral, bad, total}) => {

    return (
        <Diagram good = {good} neutral = {neutral} bad = {bad}>
            <div className="total">{total}</div>
        </Diagram>
    );
}

ResultsDiagram.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}