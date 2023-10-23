function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const MessageArray = {
    Lucky: ['Bad', 'Not OK', 'OK', 'Lucky', 'Very Lucky'],
    Activity: ['Go Out', 'Stay Home', 'Do Sports', 'Go To Work'],
    LuckyNumber: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
};

const RandomMessage = [];

for(let subj in MessageArray) {
    const ranNumber = getRandomInt(MessageArray[subj].length);
    const Message = MessageArray[subj][ranNumber];
    if (subj === 'Lucky') {
        RandomMessage.push('Your Luck Today is ' + Message + '.');
    } else if (subj === 'Activity') {
        RandomMessage.push('You should ' + Message +' today.');
    } else if (subj === 'LuckyNumber') {
        RandomMessage.push('Your lucky number is ' + Message + '.')
    }
}