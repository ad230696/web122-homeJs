'use streict'

const firstTitleLetter = text => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        // current = text[i];
        if (i === 0 || text[i - 1] == 0) {
            result += text[i].toUpperCase();
        } else {
            result += text[i];
        }
    }
    return result;
};

console.log(firstTitleLetter('hello, world!'));
