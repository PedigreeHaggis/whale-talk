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
