import PropTypes from 'prop-types';
import {TbCoffee} from "react-icons/tb";
import { FeedbackOptions, FeedbackBtn } from "./FeedbackOptions.styled";

export const FeedbackButttons = ({onclick}) => {
    return (<FeedbackOptions>
        <li>
            <FeedbackBtn id="good" onClick={onclick}><TbCoffee size={80} color={"#3f8125"}/><span className="btn__text">Good</span></FeedbackBtn>
        </li>
        <li>
            <FeedbackBtn id="neutral" onClick={onclick}><TbCoffee size={80} color={"orange"}/><span className="btn__text">Neutral</span></FeedbackBtn>
        </li>
        <li>
            <FeedbackBtn id="bad" onClick={onclick}><TbCoffee size={80} color={"red"}/><span className="btn__text">Bad</span></FeedbackBtn>
        </li>
    </FeedbackOptions>);
}

FeedbackButttons.propTypes = {
    onclick: PropTypes.func.isRequired,
}