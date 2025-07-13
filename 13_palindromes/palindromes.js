const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");

    console.log(cleanedString);

    const reversedString = cleanedString.split('').reverse().join('');


    //controleren of beide strings overeenkomen
    if(cleanedString === reversedString) {
        return true;
    }
    else {
        return false;
    }
}; 

console.log(palindromes("Racecar!"));
// Do not edit below this line
module.exports = palindromes;
