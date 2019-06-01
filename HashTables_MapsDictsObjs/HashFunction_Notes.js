// very simple hash function that works on strings only;
// not constant time====== bad... not super random; and '!,?' etc wont work
function has(key, arrayLen){
    let total=0;
    for (let char of key) {
        // loops over every individual character, which is always index[0]
        // subtracting by 96 to find placement in alphabet, ex: a=1; instead of 97 now
        let value= char.charCodeAt(0)-96;
    // divides by array length to assign an index within the array length.
    // instead of modulus after, we are doing it with each step, as total is being included
    // more security b/c of more complexity.
        total=(total+value)% arrayLen;
    }
    return total;
}
console.log(has('aroo',20))