import React from 'react';

//quicksort is ideal for large databases
//random pivot version

const QuickSort = (stateArray: number[], left: number = 0, right: number = stateArray.length - 1) => {
    const position = Partition(stateArray, left, right)
    if (left < position - 1){
        QuickSort(stateArray, left, position - 1);
    }
    if (position < right){
        QuickSort(stateArray, position, right);
    }
    return stateArray
}

const Partition = (stateArray: number[], left: number, right: number) => {
    const pivotIndex = stateArray[Math.floor(Math.random() * stateArray.length)]
    while (left <= right){
        while (stateArray[left] < pivotIndex){
            left++;
        }
        while (stateArray[right] > pivotIndex){
            right--;
        }
        if (left <= right){
            let temp = stateArray[left];
            stateArray[left] = stateArray[right];
            stateArray[right] = temp;
            left++
            right--
        }
    }
    return left;
}

export default QuickSort