import { FeedbackOptions, FeedbackBtn } from "./FeedbackOptions.styled";
import {TbCoffee} from "react-icons/tb";

export const FeedbackButttons = ({onclick}) => {
    return (<FeedbackOptions>
        <li>
            <FeedbackBtn id="good" onClick={onclick}><TbCoffee size={80} color={"#3f8125"}/></FeedbackBtn>
        </li>
        <li>
            <FeedbackBtn id="neutral" onClick={onclick}><TbCoffee size={80} color={"orange"}/></FeedbackBtn>
        </li>
        <li>
            <FeedbackBtn id="bad" onClick={onclick}><TbCoffee size={80} color={"red"}/></FeedbackBtn>
        </li>
    </FeedbackOptions>);
}