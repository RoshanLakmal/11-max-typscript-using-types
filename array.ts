const person1 = {
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

// console.log(person1);
console.log(person1.name);

for(const hobby of person1.hobbies){
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!
}