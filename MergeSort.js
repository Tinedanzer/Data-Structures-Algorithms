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
    if(arr1.length<=1)return arr1;
    let left=mergeSort(arr1.slice(0,Math.floor(arr1.length/2)));
    let right=mergeSort(arr1.slice(Math.floor(arr1.length/2)));
    return merge(left,right);
}
console.log(mergeSort([3,2,1,15,51,4,54]))