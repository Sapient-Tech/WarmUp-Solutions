//1
function counting(n) {
  var counter = 1;
  var total = "";
  var comma = ",";
  while (counter <= n) {
    if (counter !== n) {
      total = total + counter + comma;
    } else {
      total = total + counter;
    }
    counter = counter + 1;
  }
  return total;
}
//2
function meetAndGreet(n) {
  var counter = 1;
  var innercounter;
  var result = "";
  var linebreak = "/n";
  var comma = ",";
  while (counter <= n) {
    if (n === 1) {
      result = "welcome" + counter;
    } else if (counter === 1) {
      result = "welcome" + counter + linebreak;
    } else {
      result = result + "welcome" + counter + comma + "meet";
      innercounter = 1;
      while (innercounter < counter) {
        if (innercounter === counter - 2) {
          result = result + innercunter + "and";
        } else if (innercounter === counter - 1) {
          result = result + innercunter;
        } else {
          result = result + innercunter + comma;
        }
        innercounter = innercounter + 1;
      }
      result = result + linebreak;
    }
    counter = counter + 1;
  }
  return result;
}

//3
function repeatString(str, count) {
  if (count == 0) {
    return "";
  }
  return str + repeatString(str, count - 1);
}
