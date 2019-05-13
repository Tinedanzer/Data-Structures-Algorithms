// time complexity: (nlogn)  ----one of the better options in general cases for sorting.
// space complexity: (n)

// compares each sorted array and combines sorted, starting with 1 element in each array.
function merge(arr1,arr2){
    let results=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;}
    while(j < arr2.length){
        results.push(arr2[j])
        j++;}
    return results;
}
// recursive breakdown on unsorted array:
function mergeSort(arr1){
    let aroo=arr1.length;
    if(aroo<=1)return arr1;
    let left=mergeSort(arr1.slice(0,Math.floor(aroo/2)));
    let right=mergeSort(arr1.slice(Math.floor(aroo/2)));
    return merge(left,right);
}
// Array.from({length:100}, ()=>Math.floor(Math.random() * 1000))
console.log(mergeSort([12,95,41,23,5,6,9,947,20]))
console.log(mergeSort(Array.from({length:100}, ()=>Math.floor(Math.random() * 1000))));