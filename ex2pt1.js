// Question 1
//Arrow function
const Start = ()=>  {
    //The value printed to the Console
    console.log("Data Representation & Querying")
}
Start();

// Question 2
//Arrow function
const Return = (A)=>  {
        //A Return statment
return A;
   
}
//the console log for the print

console.log(Return("data Representaiton"));

// Question 3 
//Arrow function
const Add = (A , B )=>  {
    //The two values added together 
C = A+ B 
    //The returned value for the console log
    return C;
   
}
//the console log for the print

console.log(Add(2, 2 ));

// Question 4
//This is an array 
const ages = [25, 31, 42, 77];
//Arrow function
const Array1 = ages.map((ages1 ) => {
    //An if statment to only allow specific values to be multiplied based off their starting value
if (ages1 < 70) {

    return ages1 * 2 
}
else {
    return ages1;
}
});
//the console log for the print
console.log(Array1)



