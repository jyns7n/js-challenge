
function longestWord(sentence) {

    const words = sentence.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest;
}

const sentence = 'React expects that the rendered content is identical between the server and the client.';

let lw = longestWord(sentence);
console.log(lw)