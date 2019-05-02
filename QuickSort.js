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
console.log(recursiveQuickSort([8,10,11,2,4]));