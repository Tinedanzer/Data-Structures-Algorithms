function charCount(str){
    const aroo={};
// for of loop used for arrays;  shortens code to having to access each obj[i] and no traditional for loop

// can define my own regex(regular expression) syntax with this format.'g' is the global operator
// there are a few
    for (let char of str) {
        char=char.toLowerCase();
        if (/[a-z0-9]/g.test(char)) {
// This replaces an if statement with one line (checks existence and adds one, or creates a new key:value of 1)
            // if (aroo[char]>0)){ 
                // aroo[char]++   } 
                // else { aroo[char] = 1}
    // using ternary operator ?; format true/false check ? iftrue this happens : or this happens if false.
            // aroo[char] = aroo[char]>0 ? ++aroo[char] : 1;
            aroo[char] = ++aroo[char] || 1;
        }
    };
    return aroo;
};
console.log(charCount("Hello hi3 ="))
// ----------------------------------------------------------------------
//  for in,  used for looping over objects  and finding values from keys
const obj = {
	a: 'adfaf',
	b: 2,
	c: 3,
	d: 42
}

for (const key in obj) {
	console.log( obj[key] )
}