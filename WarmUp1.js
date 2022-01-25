//1
var x = 3;
var y = 5;
var z = x + y;

//2
var lenth = 2;
var arrea = lenth * lenth;

//3
var firstname = "Hello";
var lastname = "world";
var fullname = firstname + " " + lastname;

//4
var multiple = 13;
if (13 % 3 === 0) {
  return "13 is multiple of 3";
} else {
  return "non";
}

//5
function average(list) {
  var sum = 0;
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    sum += element;
  }
  return sum / list.length;
}

//6
function AgesInSeconds(age) {
  return age * 365 * 24 * 60 * 60;
}

//7
var lenth = 2;
var Width = 4;
var arrea = lenth * Width;
