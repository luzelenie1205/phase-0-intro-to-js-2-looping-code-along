// Code your solutions in this file
const newArray=[];

function writeCards(stringNames,eventName){
    for (let i=0; i< stringNames.length;i++){
       
newArray.push("Thank you, "+ stringNames[i]+", for the wonderful surprise gift!")
    }
    return newArray
}

function  countDown(numbers){
 let i=11;
 while (i>0){
     console.log(numbers--)
     i--
 }
return numbers;
}
