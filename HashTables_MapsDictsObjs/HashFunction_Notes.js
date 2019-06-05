// very simple hash function that works on strings only;
function hash(key, arrayLen){
    let total=0;
    // primes add more security and decreases possible collisions
    // ALSO, arraylength size being a PRIME length greatly decreases odds of collisions.
    let crazy_prime=31;
    // Math.min in here to shorten amount of iterations for hashing.
    for (let i=0; i< Math.min(key.length,100); i++) {
        // loops over every individual character, which is always index[0] for charCode at the time.
        // subtracting by 96 to find placement in alphabet, ex: a=1; instead of 97 now
        let char=key[i];
        // Math.absolute to prevent negative indices.
        let value= Math.abs(char.charCodeAt(0)-96);
    // divides by array length to assign an index within the array length.
    // instead of modulus after, we are doing it with each step, as total is being included
    // more security b/c of more complexity. and LETS ADD A PRIME!
        total=(total+crazy_prime+value)% arrayLen;
    }
    return total;
}

// using a prime # array length.
console.log(hash('Arooz!',19))