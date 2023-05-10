const Calculator = require ('./Calculator');

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("adds two positive numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds a positive and a negative number correctly", () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test("adds two negative numbers correctly", () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers correctly", () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test("subtracts a negative number from a positive number correctly", () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    test("subtracts two negative numbers correctly", () => {
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers correctly", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies a positive and a negative number correctly", () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test("multiplies two negative numbers correctly", () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers correctly", () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test("divides a positive number by a negative number correctly", () => {
      expect(calculator.divide(6, -2)).toBe(-3);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
    });
  });
});
