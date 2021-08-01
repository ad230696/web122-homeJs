'use streict'

const palindrome = num => {
    if (num % 1 !== 0) {
        return false;
    }
    let stringNum = String(num);
    let splitNum = stringNum.split('');
    let reverseNum = splitNum.reverse();
    let joinNum = reverseNum.join('');
    let numberNum = Number(joinNum);

    if (num === numberNum) {
        return true;
    } else {
        return false;
    }
};



console.log(palindrome(-121));