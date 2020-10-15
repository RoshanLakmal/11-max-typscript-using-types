const person4 = {
    name: 'Roshan',
    age: 28,
    hobbies: ['Sports','Cooking']
};

let favoriteActivities:any[]; // Avoid using any at all times.
// favoriteActivities = 'Sports'; // Validate
favoriteActivities = ['Sports']; // Correct! Loose benifit of typescript.
