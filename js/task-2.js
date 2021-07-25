'use streict'

const getWeekends = length => {
    const long = ['saturday', 'sunday'];
    const short = ['sat', 'sun'];
    switch(length) {
        case 'long':
            return long;
        case 'short':
            return short;
        default:
            return length;
    }

};

console.log(getWeekends('long'));
console.log(getWeekends('short'));
console.log(getWeekends('hello'));