const { sum, sumOf } = require("./sum");

// it: test case 생성 시키는 함수
it(`calculates 1 + 2`, () => {
  // expect: 특정 값이 ~~~ 일 것이다 라고 사전에 정의하고 통과하면 성공 아니면 실패 시키는 함수
  // toBe: 정해진 값과 일치하는지를 확인해주는 함수
  expect(sum(1, 2)).toBe(3);
});

// describe: 여러 테스트를 묶을 수 있게 해주는 함수
describe("sum", () => {
  it(`calculates 1 + 2`, () => expect(sum(1, 2)).toBe(3));

  it(`calculates all numbers`, () => {
    const array = [1, 2, 3, 4, 5];

    expect(sumOf(array)).toBe(15);
  });
});
