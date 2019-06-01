// using a 2 counters
// using 2 cached variables to act as a sliding window for comparison.
function findLongestSubstring2(val){
    let counter=0;
    if(val.length>0){
        counter=1;
    }
    else{return 0}
    let finalcounter=0;
    let start=val[0];
    let slider=val[1];
    for (let i=1; i<val.length; i++){
      if(start!=slider){  
        counter++;
        start=val[i];
//checks if value exists, before attempting to save the new slider value.(not super necessary)
        if(val[i+1])slider=val[i+1];
      }
      else{
          if(finalcounter<counter) finalcounter=counter;
            //    console.log(finalcounter);
          counter=1;
          start=val[i];
          if(val[i+1])slider=val[i+1];
      }
    }
    if(finalcounter<counter) finalcounter=counter;
    return finalcounter;
}
// better working solution; using objects and an index with a 'key' to access index for distance moved
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
console.log(findLongestSubstring('aroo'));
console.log(findLongestSubstring(''));
console.log(findLongestSubstring('pewpewpew'));
console.log(findLongestSubstring('awqqqwwddddwww'));
console.log(findLongestSubstring('macronipule'));