function max(numbers) {
  // let result = numbers[0];

  // numbers.forEach((element) => {
  //   if (element > result) {
  //     result = element;
  //   }
  // });

  // return result;

  return Math.max(...numbers);
}

function min(numbers) {
  return Math.min(...numbers);
}

exports.max = max;
exports.min = min;
