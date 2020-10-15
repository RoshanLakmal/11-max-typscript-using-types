function add(n1:number,n2:number){
    return n1+n2;
}

function printResult(num:number):void {
    console.log('Result: '+num);
}

function addAndHandle(n1:number, n2:number, cb:(num:number) => void){
    const result = n1+n2;
    cb(result);
}

printResult(add(5,12));

// let combineValues;

// combineValues = add;
// combineValues = 5; // Type script cannot detect so will throw runtime error

// console.log(combineValues(5,12)); 

// let combineValues: Function;

// combineValues = add;
// combineValues = printResult; // Type script will not detect and return undefined
// // combineValues = 5; // Type script detect and show error message

// console.log(combineValues(5,12)); 

let combineValues: (a:number,b:number) => number;

combineValues = add;
// combineValues = printResult; // Type script detect and show error message

console.log(combineValues(5,12)); 

addAndHandle(10,20,(result) => {
    console.log(result);
});
