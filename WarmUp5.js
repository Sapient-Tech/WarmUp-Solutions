//1
function countVowels(string) {
  var count = 0;
  var i = 0;
  if (
    string[i] === "A" ||
    string[i] === "E" ||
    string[i] === "I" ||
    string[i] === "O" ||
    string[i] === "U"
  ) {
    count = count + 1;
  }
  return (count = countVowels(string[i + 1]));
}

//2
function mult(n) {
  if (n === 0) {
    return 1;
  }
  return n * mult(n - 1);
}

//3
function isSubset(array, sub) {
  if (array.length >= sub.length) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].includes(sub[i])) {
        return true;
      } else return false;
    }
  } else {
    isSubset(sub, array);
  }
}
