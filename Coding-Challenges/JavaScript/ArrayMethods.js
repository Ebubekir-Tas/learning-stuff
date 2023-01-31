Array.prototype.myMap = function (callback) {
  const arr = [];

  for (let i=0; i<this.length; i++){
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callback) {
  const arr = [];

  for (let i=0; i<this.length; i++){
    if (callback(this[i], i, this) === true){
      arr.push(this[i])
    }
  }
  return arr;
}

Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length === 0) {
    return initialValue;
  }

  let accumulator = initialValue;
  for (let i=0; i<this.length; i++){
    if (i===0 && initialValue === undefined){
      accumulator = this[0];
    } else {
      accumulator = callback(accumulator, this[i], i, this)
    }
  }
  
  return accumulator;
};
