
const h1 = document.querySelector('h1');
const userWord = prompt(`inserisci una parola per scoprire se è palindroma`);

const arrayWord = userWord.split('');
console.log(arrayWord);


h1.innerHTML = checkPalindromWord(arrayWord);


function checkPalindromWord(arrWord) {
  const arrReversed = arrayWord.reverse('').join('');
  const arrConfront = arrayWord.reverse('').join('');

  

  const result = arrReversed.toLocaleLowerCase() === arrConfront.toLowerCase() ? 'bravo' : 'non bravo';
  

  return result
}