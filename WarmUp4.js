function each(coll, callback) {
  if (Array.isArray(coll)) {
    for (let i = 0; i < coll.length; i++) {
      callback(coll[i], i);
    }
  } else {
    for (var key in coll) {
      callback(coll[key], key);
    }
  }
}

//1
function objKey(obj) {
  var result = [];
  each(obj, function (value, key) {
    result.push(key);
  });
  return result;
}

//2
function objLength(obj) {
  var result = 0;
  each(obj, function (value, key) {
    result++;
  });
  return result;
}

//3
function objSort(array) {
  var result = [];
  each(array, function (element, index) {
    result.splice(element["id"], 0, element);
  });
  return result;
}
