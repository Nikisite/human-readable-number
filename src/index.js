module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let result = '';

  const hundred = Math.floor(number / 100);
  const remainder = number % 100;

  if (hundred > 0) {
    result += `${ones[hundred]} hundred`;
    if (remainder > 0) result += ' ';
  }

  if (remainder >= 10 && remainder < 20) {
    result += teens[remainder - 10];
  } else {
    const ten = Math.floor(remainder / 10);
    const unit = remainder % 10;

    if (ten > 0) {
      result += tens[ten];
      if (unit > 0) result += ' ';
    }

    if (unit > 0 && ten !== 1) {
      result += ones[unit];
    }
  }

  return result;
};
