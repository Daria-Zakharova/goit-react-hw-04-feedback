import PropTypes from 'prop-types';
import {TbCoffee} from "react-icons/tb";
import { FeedbackOptions, FeedbackBtn } from "./FeedbackOptions.styled";
import { getBtnIconColor } from 'utils/get-btn-icon-color';

export const FeedbackButttons = ({options, onLeaveFeedback}) => {

    return (<FeedbackOptions>
        {options.map(option => {

            const iconColor = getBtnIconColor(option);
                        
            return (<li key = {option}>
                <FeedbackBtn id={option} onClick={onLeaveFeedback}>
                    <TbCoffee size={80} color={iconColor}/>
                    <span className="btn__text">{option}</span>
                </FeedbackBtn>
            </li>)})}
    </FeedbackOptions>);
}

FeedbackButttons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
