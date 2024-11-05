import { formatPhoneNumber } from "./formatPhoneNumber";

test("Formats Phone Number - 3 digits", () => {
  expect(formatPhoneNumber("407")).toBe("407");
});

test("Formats Phone Number - 4 digits", () => {
  expect(formatPhoneNumber("4076")).toBe("(407) 6");
});

test("Formats Phone Number - 7 digits", () => {
  expect(formatPhoneNumber("4076177")).toBe("(407) 617-7");
});

test("Formats Phone Number - 10 digits", () => {
  expect(formatPhoneNumber("4076177699")).toBe("(407) 617-7699");
});

test("Formats Phone Number - wrong format", () => {
  expect(formatPhoneNumber("(407)-617.7699")).toBe("(407) 617-7699");
});

test("Formats Phone Number - too long", () => {
  expect(formatPhoneNumber("(407)-617.769989")).toBe("(407) 617-7699");
});
