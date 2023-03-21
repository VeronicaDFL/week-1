//function declaration
// firstName is a parameter

function message (firstName){              // first name is a PARAMETER
    console.log( "Hello " + firstName );   //concatnation
}                                          //PARAMETERS WORK INSIDE A FUNCTION ONLY

function getMeow(){
    console.log("meow");
}

function getSumTotal( firstNumber, secondNumber ){
    const result = firstNumber + secondNumber;
    console.log(result);

}

function makePie(quantity) {
    const pie = '🍰'.repeat (quantity); //command+fn for pie emoji
    console.log(pie);

}
function makeAnimals (animal, quantity){

    const happyResult = animal.repeat(quantity);
    return happyResult;
}

function generateLoudSpeaker(text){
    const nextText = '🔊 ' + text.toUpperCase();
    return nextText;
}

// invoke the function
// message("Jarvis");    
// getSumTotal(2,5);
// getSumTotal(12000, 12000000)  ;                   //Jarvis is an ARGUMENT
// getSumTotal("sym" , "phony");
// makePie(4);
// const renderResult = "there are many animals " + makeAnimals (" 🐼" , 9);
// console.log (renderResult);


const computer = generateLoudSpeaker('whisper wh is per');
console.log(computer);

