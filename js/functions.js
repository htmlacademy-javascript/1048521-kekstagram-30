function calculateLengthString(str, maxLength) {
  if(str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

calculateLengthString('Мукаяйца', 20);
calculateLengthString('духовкажар', 18);
calculateLengthString('Кексоид', 10);


function findPalindromeString (str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let palindrome = '';
  for(let i = newStr.length - 1; i >= 0; i--) {
    palindrome += newStr[i];
  }

  if(newStr.toLowerCase() === palindrome) {
    return true;
  } else {
    return false;
  }
}

findPalindromeString('Лёша на полке клопа нашёл ');
findPalindromeString('топот');
findPalindromeString('ДовОд');
findPalindromeString('Кекс');
