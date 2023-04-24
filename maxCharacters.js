function findMostFrequentChar(text) {
    let charCounts = {};
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (!charCounts[char]) {
        charCounts[char] = 0;
      }
      charCounts[char]++;
    }
  
    let mostFrequentChar = '';
    let highestCount = 0;
  
    for (let char in charCounts) {
      if (charCounts[char] > highestCount) {
        mostFrequentChar = char;
        highestCount = charCounts[char];
      }
    }
  
    let result = {
      char: mostFrequentChar,
      count: highestCount
    };
  
    return result;
  }
  
  let text = 'hello world';
  let result = findMostFrequentChar(text);
  console.log(result);