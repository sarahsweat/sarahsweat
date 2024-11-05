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
