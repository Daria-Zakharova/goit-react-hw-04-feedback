import PropTypes from 'prop-types';
import { NoFeedbackNotification } from "./Notification.styled";

export const Notification = ({message}) => {
    return (
        <NoFeedbackNotification>{message}</NoFeedbackNotification>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}