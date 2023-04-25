function longestWord(sentence) {

    let words = sentence.split(" ");
    let longest = "";

    words.forEach((word) => {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}

let sentence = 'I think about you all the time.';

console.log(longestWord(sentence));