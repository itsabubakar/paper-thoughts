

type Props = {
    timestamp: number
}
const DateFormat = ({ timestamp }: Props) => {
    const createdAtTimestamp = timestamp;
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Convert timestamp to Date object
    const createdAtDate = new Date(createdAtTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Get numerical components
    const year = createdAtDate.getFullYear();
    const monthIndex = createdAtDate.getMonth();
    const month = monthNames[monthIndex];
    const day = createdAtDate.getDate();
    return (
        <span>{month} {day}, {year}</span>
    )
}
export default DateFormat