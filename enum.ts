// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person3 = {
//     name: 'Roshan',
//     age: 28,
//     hobbies: ['Sports','Cooking'],
//     role: ADMIN
// };

// if(person3.role === ADMIN){
//     console.log('is admin');
// }

enum Role { ADMIN, READ_ONLY, AUTHOR};
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person4 = {
    name: 'Roshan',
    age: 28,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
};

if(person4.role === Role.ADMIN){
    console.log('is admin');
}