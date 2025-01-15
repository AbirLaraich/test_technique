import { extractFirstAndLastDigit, parseInput } from "./utils.js";

export class CalibrationCalculator {
  constructor(input) {
    this.lines = parseInput(input);
  }

  calculateTotal() {
    return this.lines.reduce((sum, line) => {
      const value = extractFirstAndLastDigit(line);
      return value ? sum + value : sum;
    }, 0);
  }

  getCalibrationValues() {
    return this.lines
      .map((line) => ({
        line,
        value: extractFirstAndLastDigit(line),
      }))
      .filter((result) => result.value !== null);
  }
}
