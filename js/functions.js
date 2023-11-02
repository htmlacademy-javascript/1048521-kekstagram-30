
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
  const palindrome = str.split('').reverse().join('').toLowerCase();

  if(str.toLowerCase() === palindrome) {
    return true;
  } else {
    return false;
  }
}

findPalindromeString('топот');
findPalindromeString('ДовОд');
findPalindromeString('Кекс');

