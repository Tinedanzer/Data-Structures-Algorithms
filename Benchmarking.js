"use strict";
function Aroo(start,n){
    let pika=0
    let tart=start
    while (tart<=n){       
        pika+=tart
        tart++
    }
    return pika
};
function Aroo2(n){
    let total=0;
    for (let i = 0; i <=n; i++) {
        total+=i;
    }
    return total;
}
// best cause of algorithms:)
function Aroo3(n){
    return (n * (n+1)) / 2;
}
const t1=process.hrtime();
// must put this console.log within the two time checks to properly measure timing of calling the function
// console.log(Aroo(0,500000000));
console.log(Aroo2(5e7));
console.log(Aroo3(5e7));
const t2=process.hrtime();
console.log(t1);
console.log(t2); 
console.log(`${(t2[0]-t1[0])+(t2[1]-t1[1])/1000000000} seconds`);