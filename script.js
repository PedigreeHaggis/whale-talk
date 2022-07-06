// This is my own attempt at the challenge provided by CodeCademy

const phrase = 'turpentine and turtles';
const phraseArr = [];

for(let i = 0; i < phrase.length; i++){
    if(phrase[i].toLowerCase() === 'a' || phrase[i].toLowerCase() === 'e' || phrase[i].toLowerCase() === 'i' || phrase[i].toLowerCase() === 'o' || phrase[i].toLowerCase() === 'u'){
        phraseArr.push(phrase[i]);
    }
}
for(let i = phraseArr.length; i >= 0; i--){
    if(phraseArr[i] === 'u' || phraseArr[i] === 'e'){
        phraseArr.splice(i, 0, phraseArr[i]);
    }
}

const whale = phraseArr.join('').toUpperCase();
console.log(whale);


// This is the solution provided by CodeCademy for the same challenge

const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for(let i = 0; i < input.length; i++){
  if(input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i])
  }
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
}

const resultSting = resultArray.join('').toUpperCase();
console.log(resultSting);