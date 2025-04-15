export function isValid(isbn: string): boolean {
  if (!isbn || !/^\d{13}$/.test(isbn)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(isbn[i], 10);
    const weight = (i % 2 === 0) ? 1 : 3;
    sum += digit * weight;
  }

  const remainder = sum % 10;
  const calculatedCheckDigit = (remainder === 0) ? 0 : 10 - remainder;

  const actualCheckDigit = parseInt(isbn[12], 10);

  return calculatedCheckDigit === actualCheckDigit;
}
