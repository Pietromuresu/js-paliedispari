  const userNumb = parseInt(prompt('dimmi un numero da 1 a 5'));
  console.log(userNumb);

  const pariDispari = prompt('pari o dispari?');

  const numPc = getRandomNumb (1, 5) ;
  console.log(numPc);
  
  const sum = numPc + userNumb;
  console.log(sum);
  const h1 = document.querySelector('h1');

  if(checkWhoWon(pariDispari.toLowerCase, sum) === pariDispari){
    h1.innerHTML = 'hai vinto';
  }else {
    h1.innerHTML = 'ha vinto il computer';
    
  }


  function getRandomNumb (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
  }


  function checkWhoWon (evenOdd, sumPcUser){
    let result;
    if (!(sumPcUser % 2)) {
   result = 'pari';
  } else {
   result = 'dispari';
  }

 
  return result
  
  } 
  
