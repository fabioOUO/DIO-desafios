let position = 0;
const input = [7, 8, 10, 8, 260, 4, 10, 10];

const gets = () => input[position++];

const size = gets();

const getAllNumber = () => {
  let numbers = [];
  while (numbers.length < size) {
    numbers.push(gets());
  }
  return numbers;
};

const countNumbers = (numbers) => {
  let nums = [];
  let reps = [];
  for (let c = 0; c < numbers.length; c++) {
    if (!nums.includes(numbers[c])) {
      nums.push(numbers[c]);
    }
    nums.sort((a, b) => a - b);
  }
  for (let c = 0; c < nums.length; c++) {
    reps.push(numbers.filter((num) => num === nums[c]).length);
  }

  return [nums, reps];
};

const printResult = (result) => {
  for (let c = 0; c < result[0].length; c++) {
    console.log(`${result[0][c]} aparece ${result[1][c]} vez(es)`);
  }
};

const numbers = getAllNumber();
const result = countNumbers(numbers);
printResult(result);
