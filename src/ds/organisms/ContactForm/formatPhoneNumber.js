export const formatPhoneNumber = (input) => {
  if (!input) return input;
  const cleanInput = input.replace(/\D/g, "");
  const inputLength = cleanInput.length;
  if (inputLength < 4) return cleanInput;
  if (inputLength < 7)
    return `(${cleanInput.slice(0, 3)}) ${cleanInput.slice(3)}`;
  return `(${cleanInput.slice(0, 3)}) ${cleanInput.slice(
    3,
    6
  )}-${cleanInput.slice(6, 10)}`;
};
