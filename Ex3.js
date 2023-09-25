//This is the array that stores all the names in the array
names = ["Steve", "John", "Tom", "Jeff"];

// this function will Add a named value to the array
const  Addtask = (myValue) => {
    //This adds the value to the array
    names.push(myValue);
    //This is the log which shows in the console that the value was added to the array along with the the total number of names in the array 
     console.log("Task: " + myValue+ " has been added to our Array there is now " + names.length + " names in the arry ") 
    //This gets the total number of names in the array and returns it 
     return names.length;
    }

//This function prints all of the values of the names array
 const  ListAllTasks = () => {
    //A for statment so you can print names equal to the number of values within the array  
        for(let i = 0; i< names.length; i++  ){
            //This is how the names are printed 
console.log(names[i]);

        }
        //another arrow function
        names.forEach((item) => {

console.log(item);
        }
        )
    }
// this function will remove a named value from the array
    let  Removetask = (myValue) => {
        //this declares the index with a value of the array and the called name
        let index = names.indexOf(myValue);
        //this if statment removes the selected value from the value
        if (index > -1 ) {
            names.splice(index,1);
            console.log("Task: " + myValue+ " has been removed to our Array there is now " + names.length + " names in the array ")
         }
         return names.length;
        }
    
    

//These are the arrow functions being called 

 Addtask("Dan" );
 Addtask("Jim" );
 Removetask("Dan");
 ListAllTasks();




