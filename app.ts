const person = {
    name: 'Roshan',
    age: 28,
    hobbies: ['Sports','Cooking']
};

let favoriteActivities:string[];
// favoriteActivities = 'Sports'; //Error - Not an array
// favoriteActivities = ['Sports',1];  //Error - Cannot have number in string array
favoriteActivities = ['Sports']; // Correct!

// let favoriteActivities:any[];
// favoriteActivities = ['Sports',1]; // Correct! Loose benifit of typescript.

// console.log(person);
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!
}