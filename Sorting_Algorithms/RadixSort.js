// time complexity= (nk)
// space complexity= (n+k)
// grabs a digit(number) from a larger number, by dividing away the 0s using 10^place, then dividing by 10 to
// get the remainder of the 'ones' digit
function getNumber(num,place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}
// how many times does it take for 10^i to equal 'num;;//3ish rounded down; then add 1 for total digits.
function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
// using digitCount, we find the highest amount of digits in the array of numbers.
function mostDigits(arr){
    let count=0;
    let i=0;
    for (x of arr){
        count= Math.max(count, digitCount(arr[i]));
        i++;
    }
    return count
}
function finalFunction(arr){
    let count=mostDigits(arr);
    // running benchmarking
    let count2=0;
    let benchmark=[];
    let t1 =0;
    let t2=0;
    while(count2<100000){
        if(t1 !==0) {
            t2=t1;
        }
        t1=Date.now()/1000;
        let avg=t1-t2;
    for (let i = 0; i < count; i++) {
        // create an empty array digitbucket length of 10(0-9 digits)
        let digitBuckets= Array.from({length:10}, ()=>[]);
        for (let k = 0; k < arr.length; k++) {
            let digit=getNumber(arr[k],i)
            digitBuckets[digit].push(arr[k]);
            // console.log(digitBuckets);
        }
        // console.log(digitBuckets);
        // after all digits are split up to appropriate array, concat brings them back in to be split up again.
        arr = [].concat(...digitBuckets);
        // console.log(arr);
    }
    benchmark.push(avg);
    count2++
}
benchmark.shift();
// benchmarking for fun, reduce is taking the average of the benchmark array and returning seconds.
console.log(benchmark.reduce((a,b) => a + b, 0)/100000)
    return arr;
}
// console.log(getNumber(34388271,1));
// console.log(digitCount(2345));
// console.log(mostDigits([2341,23,200]));
console.log(finalFunction([23415,23,204,202,785,88,999]));
// Array.from({length:100}, ()=>Math.floor(Math.random() * 1000))
