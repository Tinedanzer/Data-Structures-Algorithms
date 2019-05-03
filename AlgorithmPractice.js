function sameFrequency(a,b){
    // console.log(`${aroo3}`.length);
    let a2=Number(a).toString();
    let b2=Number(b).toString();
   return (a2.length!=b2.length) ? false : Aroo(a2,b2);
  // good luck. Add any arguments you deem necessary.
}
function Aroo(a2,b2){
    let b3=b2.split('');
    for (let x of a2){ 
        let x2=b3.indexOf(x);
        console.log(b3.indexOf(x));
        if(x2!==-1){
            b3.splice(x2,1);
        }
        if(b3.length===0){
            return true
        }
    }
    return  false;
}
// return x2[0] !== -1 ? b3.splice(x2,1): b3.length===0 ? true:false;
console.log(sameFrequency(1022,2120));