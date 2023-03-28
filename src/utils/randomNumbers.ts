export function randomNumbers(min = 10, max = 80) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
