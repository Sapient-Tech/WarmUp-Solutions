//1
function isPrimeArray(obj) {
  var values = Object.values(obj);
  return filter(values, function (n) {
    var hint = function (n) {
      if (n === 1) {
        return true;
      } else if (n === 2) {
        return true;
      } else {
        for (var x = 2; x < n; x++) {
          if (n % x === 0) {
            return false;
          }
        }
        return true;
      }
    };
    return hint(n) === true;
  });
}
//2
function agesToMinutes(object) {
  return map(object, function (person) {
    return person.age * 356 * 24 * 60;
  });
}
