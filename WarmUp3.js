//1

function repeatString(str, count) {
  var i = 1;
  var result = "";
  while (i <= count) {
    result = result + str;
    i = i + 1;
  }
  return result;
}

//2
function isEven(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  return isEven(n - 2);
}

//3
function sum(start, end) {
  if (start > end) {
    return sum(end, start);
  }
  if (start === end) {
    return start;
  }
  return start + sum(start + 1, end);
}

//4
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//5
function decimals(n, d) {
  if (typeof n !== "number" || typeof d !== "number") return false;
  n = parseFloat(n) || 0;
  return n.toFixed(d);
}

//6
function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

//7
function laugh(h, num) {
  var laugh = "ha";
  var result = " ";
  while (num > 0) {
    result = result + laugh;
    num = num - 1;
  }
  return result;
}
