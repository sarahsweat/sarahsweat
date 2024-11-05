import { validPalindrome } from "./validPalindrome";

test("validPalindrome case 1", () => {
  expect(validPalindrome("abba")).toBe(true);
});

test("validPalindrome case 2", () => {
  expect(validPalindrome("abc")).toBe(false);
});

test("validPalindrome case 3", () => {
  expect(validPalindrome("abcba")).toBe(true);
});

test("validPalindrome case 4", () => {
  expect(validPalindrome("racecar")).toBe(true);
});

test("validPalindrome case 5", () => {
  expect(validPalindrome("sarah")).toBe(false);
});

test("validPalindrome case 6", () => {
  expect(validPalindrome("12abcba21")).toBe(true);
});
