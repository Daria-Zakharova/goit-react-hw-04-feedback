import { Data } from "./FeedbackData.styled";

export const FeedbackData = ({stats, total}) => {
    
    
    return (
        <Data>
            {stats.map(stat => (
            <li key = {stat[0]}>
                <span className="category">{stat[0]}</span>
                <span className="dots"></span>
                <span>{stat[1]}</span>
            </li>))}
            <li>
                <span className="category total">total</span>
                <span className="dots"></span>
                <span>{total}</span>
            </li>
        </Data>
    )
}