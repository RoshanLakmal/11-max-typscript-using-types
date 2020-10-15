const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string]; //Fixed size two types first number and second string
} = {
    name: 'Roshan',
    age: 28,
    hobbies: ['Sports','Cooking'],
    role: [2,'author']
};

person2.role.push('admin'); //unfortunatilly typescript will not catch this works so be aware
// person2.role[1] = 10; // Catch Error
// person2.role = [] // Catch Error
// person2.role = [0, 'admin',user]; // Catch Error
// person2.role = [0, 'admin']; //Ok
console.log(person2);

