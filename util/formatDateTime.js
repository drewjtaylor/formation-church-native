// At least on my emulator, the time was never showing up as 12-hour format, even with the appropriate options for "toLocaleString"
// This function takes a date object, and coerces the 12-hour format out of it "forcefully"

export default function formatDateTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am'; 
    hours = hours % 12; // Take away 12 hours if it's over 12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes; // adds the 0 in front of single digit minutes only
    return (hours + ':' + minutes + ' ' + ampm) //Puts it all together
}