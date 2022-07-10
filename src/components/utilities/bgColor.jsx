export const setBgColor = props => {
switch (props.className) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'gray';
    }
}