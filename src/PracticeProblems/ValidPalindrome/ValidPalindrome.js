export const validPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;

  let isValid = true;

  while (isValid && i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      isValid = false;
    }
  }

  return isValid;
};
