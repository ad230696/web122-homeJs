'use streict'

const text = 'hello ilia! how are you?';
const copitalize = text => (text.length === 0) ? text : `${text[0].toUpperCase()}${text.slice(1)}`;

firsTitleLater = text => {
    const splitText = text.split(' ');
    const result = [];
    for (const item of splitText) {
        result.push(copitalize(item))
    }
    return result.join(' ');
}

console.log(firsTitleLater(text));