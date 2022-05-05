import React from 'react';

const helperFunction = (left: number[], right: number[]): number[] => {
    let sortedArray: number[] = []
    let leftIndex = 0;
    let rightIndex = 0;
    while (left.length && right.length){
        let leftItem = left[leftIndex];
        let rightItem = right[rightIndex];
        if (leftItem !== undefined){
            if (rightItem === undefined){
                sortedArray.push(leftItem);
                leftIndex++;
            }
            else {
                if (leftItem <= rightItem){
                    sortedArray.push(leftItem);
                    leftIndex++;
                }
                else {
                    sortedArray.push(rightItem);
                    rightIndex++;
                }
            }
        }
        else {
            if (rightItem !== undefined){
                sortedArray.push(rightItem);
                rightIndex++;
            }
        }
    }
    return sortedArray;
}

const MergeSort = (stateArray: number[] ): number[] => {
    const half = Math.ceil(stateArray.length / 2);
    const left: number[] = stateArray.splice(0, half);
    const right: number[] = stateArray;
    console.log(helperFunction(MergeSort(left), MergeSort(right)));
    return helperFunction(MergeSort(left), MergeSort(right));
}

export default MergeSort;