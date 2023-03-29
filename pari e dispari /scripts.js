  const userNumb = prompt('dimmi un numero da 1 a 5');
  const pariODispari =  'pari' //prompt('pari o dispari?')

  const numPc = getRandomNumb (1, 5) ;
console.log(numPc);

  function getRandomNumb (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
  }