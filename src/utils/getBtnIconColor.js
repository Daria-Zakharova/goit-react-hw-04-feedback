export const getBtnIconColor = btnValue => {
    console.log(btnValue);
    switch (btnValue) {
        case 'good':
            return '#3f8125';
        case 'neutral':
            return 'orange';
        case 'bad':
            return 'red';
        default:
            throw new Error('invalid option in Feedback options');
    }
}