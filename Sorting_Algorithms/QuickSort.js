// time complexity = average: (nlogn); worst: (n^2)
// space complexity= (logn)
// Picks a number(say 5), then puts all numbers less of it to the left, greater to the right.
// Then we recursively do this again for the items left of number(say 5) and all the ones for the right.
// We go through the array and keep track of how many numbers are less than 5, we move them right after
// number(say 5)..ex(from 5,18,21,3,4,22) to (5,3,4,18,21,22) then after we finish the loop
// we swap index[0] which  is  5 with the index[of the amount of numbers that was less than 5
// [3,4,5,18,21,22]
function quickIndx(arr, start=0, end= arr.length-1){
    let countSwapIndx=start;
    let pivotIndx=start;
    for(let i=start+1; i<arr.length; i++){
        if(arr[i]<arr[pivotIndx]){
            countSwapIndx++
            swap(arr,i,countSwapIndx)
            // let temp=arr[i];
            // arr[i]=arr[countSwapIndx];
            // arr[countSwapIndx]=temp;
        }
    }
    swap(arr,pivotIndx,countSwapIndx);
    // let temp=arr[pivotIndx];
    // arr[pivotIndx]=arr[countSwapIndx];
    // arr[countSwapIndx]=temp;
    // return arr;
    return countSwapIndx;
}
function swap(array,i,j){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}
function recursiveQuickSort(arr, left= 0, right= arr.length-1){
    if(left<right){
        let pivot= quickIndx(arr, left, right); //2
        recursiveQuickSort(arr,left,pivot-1);  //left
        recursiveQuickSort(arr,pivot+1,right) //right side
    }
    return arr;
}
console.log(recursiveQuickSort([8,10,11,2,4,100,87,55,45]));