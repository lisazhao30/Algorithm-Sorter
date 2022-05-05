import React from 'react';

//quicksort is ideal for large databases
//random pivot version

const QuickSort = (stateArray: number[], left: number = 0, right: number = stateArray.length - 1, animatedArray: (string | number)[][] = []) => {
    const position = Partition(stateArray, left, right, animatedArray);
    if (left < position - 1){
        QuickSort(stateArray, left, position - 1, animatedArray);
    }
    if (position < right){
        QuickSort(stateArray, position, right, animatedArray);
    }
    return animatedArray;
}

const Partition = (stateArray: number[], left: number, right: number, animatedArray: (string | number)[][]) => {
    const pivotIndex = stateArray[Math.floor(Math.random() * stateArray.length)];
    animatedArray.push(['index', pivotIndex])
    while (left <= right){
        while (stateArray[left] < pivotIndex){
            left++;
        }
        while (stateArray[right] > pivotIndex){
            right--;
        }
        if (left <= right){
            animatedArray.push(['comparing', left, right])
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