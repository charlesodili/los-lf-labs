
const sortNigerianStates = (naijaStates = []) => {
  const { 2: third, 19: ninetenth } = naijaStates
    .slice()
    .filter(st => st && typeof st === 'string' && isNaN(st))
    .map(st => st.trim())
    .sort((current, next) => next.length - current.length);

  return [third, ninetenth];
};

const palindromeChainLength = (input) => {
  const reverse = num => parseInt(`${num}`.split('').reverse().join(''), 10);
  const computeLength = (num, len = 0) => {
    const reversed = reverse(num);
    if(num === reversed) return len;

    return computeLength(num + reversed, len + 1);
  };
  return input ? computeLength(parseInt(Math.abs(input), 10)) : -1;
};

const multiples = (needle, haystack) => parseInt(Math.abs(haystack) / Math.abs(needle), 10);

const getReplacement = (num) => num > 9 ? num - 9 : num;

const validateCC = raw => {
  // sanitize input
  const rawInput = `${raw}`;
  const rawNum = (rawInput.startsWith('-') ? rawInput.substring(1) : rawInput).substring(0, 16);

  const digits = rawNum.split('').map(item => parseInt(item, 10));

  // double and replace the digits
  // then compute sum
  let cursor = digits.length % 2 === 0 ? 0 : 1;
  const sum = digits
  .reduce((total, num, index) => {
    let computed = num;
    if(cursor === index) {
      computed = getReplacement(num * 2);
      cursor += 2;
    }
    return total + computed;
  }, 0);

  return sum % 10 === 0;
};

const arraySum = (nums = []) => {
  const cleanedNums = nums.filter(num => !isNaN(num)).map(num => Number(num));

  const computeRecursive = ([sum, next, ...rest]) => {
    if (rest.length === 0) return sum + next;

    return arraySum([sum + next, ...rest]);
  };
  return computeRecursive(cleanedNums);
};

module.exports = {
  sortNigerianStates, palindromeChainLength,
  validateCC, multiples, arraySum
};
