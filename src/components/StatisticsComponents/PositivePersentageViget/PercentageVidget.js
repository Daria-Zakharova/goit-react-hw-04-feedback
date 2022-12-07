import PropTypes from 'prop-types';
import { Vidget } from "./PercentageVidget.styled";

export const PercentageCupVidget = ({percentage, percentageValue}) => {
    return (
        <Vidget percentage= {percentage}>{percentageValue}</Vidget>
    );
}

PercentageCupVidget.propTypes = {
    percentage: PropTypes.number.isRequired,
    percentageValue: PropTypes.string.isRequired,
}