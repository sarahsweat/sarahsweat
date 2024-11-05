import { validParenthesis } from "./ValidParenthesis";

test("valid parenthsis case 1 - true", () => {
  expect(validParenthesis("(()){{}}({})(){}[]{[]}")).toBe(true);
});

test("valid parenthsis case 2 - true", () => {
  expect(validParenthesis("(()()){{}}({}){}[{[]}]")).toBe(true);
});

test("valid parenthsis case 3 - true", () => {
  expect(validParenthesis("(){}[]")).toBe(true);
});

test("valid parenthsis case 4 - false", () => {
  expect(validParenthesis("(]")).toBe(false);
});

test("valid parenthsis case 5 - true", () => {
  expect(validParenthesis("()")).toBe(true);
});

test("valid parenthsis case 6 - false", () => {
  expect(validParenthesis("}")).toBe(false);
});

test("valid parenthsis case 7 - false", () => {
  expect(validParenthesis("((){}[{g345[]}]")).toBe(false);
});

test("valid parenthsis case 8 - true", () => {
  expect(validParenthesis("a()(b({})[cc]2{})()*34{}")).toBe(true);
});

test("valid parenthsis case 9 - false", () => {
  expect(validParenthesis("(()))({{({}}}){}{}}}}[{[]}]")).toBe(false);
});
