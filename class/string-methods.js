//LENGTH


const strLength2 = () => {
const string = "Great idea Megan!";
console.log(string.length)


}

//length Invoke
strLength2()


///to upperCase

const toUpper2 = () =>{

    const string = "local scope";
    console.log("str uppercase:", string.toUpperCase());


}
 toUpper2()

 /////trim

 const  strtrim2 = () => {
const string = "      Hello this is Major Tom    "
console.log("str trim:", string.trim());


 }
 strtrim2();

 ////REPLACE

 const strReplace = () => {
 const str = "I didn't sleep much last night .";
 const subject = " sleep much";
 const replace = " eat anything";

 console.log("strReplace:",str.replace(subject, replace));




 }
 strReplace() 


 ////SUBSTRING



 const strSub2 =() => {


    const str = "I like big fonts and i cannot lie";
    console.log("substring:", str.substring(6, 15));
 }
 strSub2()


 /////SPLIT

 const strSplit = () => {

    const str = "I like starwars. oh. purrrr";
    console.log("str.split:", str.split("."))

 }

strSplit()


