function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  // reduce로 리펙토링
  // let result = 0;

  // numbers.forEach((n) => {
  //   result += n;
  // });

  // return result;

  return numbers.reduce((acc, current) => acc + current, 0);
}

// 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
