const numberList = [3,1,5];
const missingNum = [];

for (let i = 1; i < Math.max(...numberList); i++) {
    if (numberList.includes(i) === false) {
        missingNum.push(i);
    } ;
}

console.log(missingNum);

