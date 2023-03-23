/*
object convert a function that converts a string to a friendly sentence.

string method: toLowerCase(), toUpperCase(), trim(),
arrow function:
*/

const convertSentence = (text) => {

    const lowerText = text.tolowerCase();
    const upperFirst = lowerText[0].toUpperCase();
    const finalText = upperFirst + lowerText.substring(1);
    return finalText;

}

const sentence = "Type better please";
const result = convertSentence(sentence);

console.log("original:", sentence);
console.log("result:", result)



