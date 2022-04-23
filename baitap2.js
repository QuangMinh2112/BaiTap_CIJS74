// let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// let myArrayWithNoDuplicates = myArray.reduce(function (accumulator, element) {
//   if (accumulator.indexOf(element) === -1) {
//     accumulator.push(element);
//   }
//   return accumulator;
// }, []);

// console.log(myArrayWithNoDuplicates);

const myArrayWithNoDuplicates = (myArray) => {
  const newArray = myArray.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
  return newArray;
};
console.log(myArrayWithNoDuplicates([1, 2, 3, 5, 4, 2, 6, 4]));
