import { Vidget } from "./PercentageVidget.styled";

export const PercentageCupVidget = ({percentage, goodReviews}) => {

const positivePercentage = percentage ? `${percentage.toFixed()}%` : '';
const firstPositiveReview = goodReviews === 1;
    return (
        <Vidget percentage= {percentage} first = {firstPositiveReview}>{positivePercentage}</Vidget>
    );
}