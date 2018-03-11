module.exports = function longestConsecutiveLength(array) {
  array.sort( (a, b) => a - b);
  let counter = 1, result = 0;
  for (let i = 0, size = array.length; i < size; i++) {
    if (array[i] == array[i + 1]) continue;
    if (array[i] == array[i + 1] - 1) {
      counter++;
    } else {
	    if (counter > result) {
	      result = counter;
	    }
	    counter = 1;
    }
  }
  return result;
}
