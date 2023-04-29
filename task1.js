function getCarNumber(word, numbers) {
    let carNumber = '';
    if(!word || !numbers){
        return 'Введіть дані'
    }else{
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i);
      const index = code % 4;
      carNumber += numbers[index];
    }
    }
    return carNumber;
}
module.exports = getCarNumber
const word = 'fwafsf';
const codeNumber = '14325647584324';
const carNumber = getCarNumber(word, codeNumber);
console.log(carNumber); 
