const lastWordLength = (word) => {
    return word.split(' ').reverse()[0].length
}

const word = 'Hello World';

const result = lastWordLength(word);
console.log(result)