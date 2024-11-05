export const validParenthesis = (s) => {
  let stack = [];

  const validChars = ["(", ")", "{", "}", "[", "]"];

  for (let i = 0; i < s.length; i++) {
    if (!validChars.includes(s[i])) {
      continue;
    } else if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (stack.length) {
      let last = stack[stack.length - 1];
      if (
        (s[i] === ")" && last === "(") ||
        (s[i] === "]" && last === "[") ||
        (s[i] === "}" && last === "{")
      ) {
        stack.pop();
      }
    } else return false;
  }

  return !stack.length;
};
