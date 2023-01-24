// Ejercicio 1
let arrayCount = [9, 2, 3, 4, 5];
let count = 0;

for (let i = 0; i < arrayCount.length; i++) {
  count++;
}
console.log(count);

// Ejercicio 2
let arrayCount2 = [9, 2, 3, 4, 5];
let assign = 0;
let link = 0;

for (let i = 0; i < arrayCount2.length; i++) {
  assign = arrayCount2[i];
  for (let j = 0; j < arrayCount2.length; j++) {
    link = assign.toString() + arrayCount2[j].toString();
    console.log(link);
  }
}

// Ejercicio 3
let arrCombinations = [9, 2, 3, 4];
let assign2 = 0;
let combination = 0;

for (let i = 0; i < arrCombinations.length; i++) {
  assign2 = arrCombinations[i].toString();

  for (let j = i + 1; j < arrCombinations.length; j++) {
    combination = assign2 + arrCombinations[j].toString();
    console.log(combination);
  }
}

// Ejercicio 4
var nums = [2, 3, 6, 5, 0];
var x = 7;

for (var i = 0; i < nums.length; i++) {
  for (var j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === x) {
      console.log("índice " + i + " e índice " + j);
    }
  }
}

// Ejercicio 5
let arrSplit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let countSplit = 0;

for (let i = 0; i < arrSplit.length; i++) {
  if (arrSplit[i] % 2 !== 0) {
    countSplit++;
  }
}
console.log(countSplit);
