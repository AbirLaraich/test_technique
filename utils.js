export const extractFirstAndLastDigit = (line) => {
  const digits = line.match(/\d/g);
  if (!digits) return null;
  const firstDigit = digits[0];
  const lastDigit = digits[digits.length - 1];
  return parseInt(firstDigit + lastDigit);
};

export const parseInput = (input) => {
  return input.split("\n").filter((line) => line.trim());
};
