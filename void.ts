function add(n1:number,n2:number){
    return n1+n2;
}

function printResult(num:number):void {
    console.log('Result: '+num);
}

/* Wrong must say return */
// function printResult(num:number):undefined {
//     console.log('Result: '+num);
// }


/* Correct but works as void and hardly ever use unless if you want to return undefined */
// function printResult(num:number):undefined {
//     console.log('Result: '+num);
//     return;
// }
// let someValue:undefined; //You can defined varibles saying undefined. 


printResult(add(5,12));
console.log(printResult(add(5,12))); // print undefined
