function removeDuplicates(arrs) {
  let uniqueArr = [];
  arrs.forEach(arr => {
    if (uniqueArr.indexOf(arr) === -1) {
      uniqueArr.push(arr);
    }
  });
  return uniqueArr;
}

const arrs = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
console.log(removeDuplicates(arrs));