function array_unique(array) {
  array.sort();

  let max = [0, 0];

  let count = 1;
  for (let i = array.length - 1; i > 0; --i) {
    if (array[i] == array[i - 1]) ++count;
    else {
      if (max[1] < count) {
        max[0] = array[i];
        max[1] = count;
      }
      count = 1;
    }
  }
  console.log("Value: ", +max[0], "Count: ", max[1]);
}

let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
array_unique(array);
