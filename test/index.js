const { expect } = require('chai');

let {
  sortNigerianStates,
  palindromeChainLength,
  validateCC,
  multiples,
  arraySum
} = require('../labs.js');

const noOpFn = () => {};

const states = [
  'Abia',
  'Adamawa',
  'Anambra',
  'Akwa Ibom',
  'Bauchi',
  'Bayelsa ',
  45634856843,
  null,
  'Benue',
  'Borno',
  ' Cross River',
  'Delta',
  'Ebonyi  ',
  () => {},
  'Enugu',
  'Edo',
  'Ekiti ',
  ,
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  Symbol(),
  ' Kebbi ',
  'Kogi',
  'Kwara',
  new Date(),
  'Lagos',
  ,
  ' Nasarawa ',
  'Niger',
  'Ogun',
  'Ondo',
  Date.now(),
  'Osun',
  ,
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  '    Zamfara'
];

describe('LOS LF Code Challenge Tests', () => {
  describe('sortNigerianStates', () => {
    it('should be named sortNigerianStates', () => {
      expect(typeof sortNigerianStates).to.equal('function');
    });

    sortNigerianStates = sortNigerianStates || noOpFn;
    const result = sortNigerianStates(states);

    // check return type(s)
    it('should return an array of two strings', () => {
      expect(typeof result).to.equal('object');
      expect(typeof result.push).to.equal('function');
      expect(result.length).to.equal(2);

      const isAllStrings = result.every(e => typeof e === 'string');
      expect(isAllStrings).to.equal(true);
    });

    // check output correctness type(s)
    it('should handle edge cases & return correct output', () => {
      const [first, second] = result;
      expect(second).to.equal('Kwara');
      expect(first).to.equal('Nasarawa');
    });
  });

  describe('palindromeChainLength', () => {
    it('should be named palindromeChainLength', () => {
      expect(typeof palindromeChainLength).to.equal('function');
    });

    palindromeChainLength = palindromeChainLength || noOpFn;

    // check return type(s)
    it('should return a positive integer', () => {
      const result = palindromeChainLength(87);
      expect(typeof result).to.equal('number');
      expect(`${result}`.indexOf('.')).to.equal(-1);
      expect(`${result}`.indexOf('-')).to.equal(-1);
    });

    // check output correctness type(s)
    it('should handle edge cases & return correct output', () => {
      let result = palindromeChainLength(87);
      expect(result).to.equal(4);

      result = palindromeChainLength(-87);
      expect(result).to.equal(4);

      result = palindromeChainLength(-87.5);
      expect(result).to.equal(4);
    });
  });

  describe('multiples', () => {
    it('should be named multiples', () => {
      expect(typeof multiples).to.equal('function');
    });

    multiples = multiples || noOpFn;

    // check return type(s)
    it('should return a positive integer', () => {
      const result = multiples(5, 100);
      expect(typeof result).to.equal('number');
      expect(`${result}`.indexOf('.')).to.equal(-1);
      expect(`${result}`.indexOf('-')).to.equal(-1);
    });

    // check output correctness type(s)
    it('should handle edge cases & return correct output', () => {
      let result = multiples(5, 100);
      expect(result).to.equal(20);

      result = multiples(9, 250);
      expect(result).to.equal(27);

      result = multiples(9, 27);
      expect(result).to.equal(3);

      result = multiples(9, -5);
      expect(result).to.equal(0);
    });
  });

  describe('validateCC', () => {
    it('should be named validateCC', () => {
      expect(typeof validateCC).to.equal('function');
    });

    validateCC = validateCC || noOpFn;

    // check return type(s)
    it('should return a boolean', () => {
      const result = validateCC(4543959);
      expect(typeof result).to.equal('boolean');
      expect(result === true || result === false).to.equal(true);
    });

    // check output correctness type(s)
    it('should handle edge cases & return correct output', () => {
      let result = validateCC(4012888888881881);
      expect(result).to.equal(true);

      result = validateCC(4012888898881881);
      expect(result).to.equal(false);
    });
  });

  describe('arraySum', () => {
    it('should be named arraySum', () => {
      expect(typeof arraySum).to.equal('function');
    });

    arraySum = arraySum || noOpFn;
    const fiveFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const seventeenPointFive = [1, 2, 3, null, '_', 4, '5', -5, 10, '-2.5'];

    // check return type(s)
    it('should return a number', () => {
      const result = arraySum(fiveFive);
      expect(typeof result).to.equal('number');
    });

    // check output correctness type(s)
    it('should handle edge cases & return correct output', () => {
      const result = arraySum(seventeenPointFive);
      expect(typeof result).to.equal('number');
      expect(result).to.equal(17.5);
    });
  });
});
