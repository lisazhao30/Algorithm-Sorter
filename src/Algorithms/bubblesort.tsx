import React from 'react';

//bubble sort: compare the elements beside one another and swap them 
//o(n)^2 time, o(1) space
let array: any[] = [1, 3, 2, 6, 5]

const BubbleSort = (array: number[]) => {
    const animations: any[][] = []
    for (let i = 0; i < array.length - 1; i++){
        animations.push(["first-comparison", i, i+1])
        if (array[i] > array[i + 1]){
            let temp: number = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp
            animations.push(["second-comparison", i, i+1])
        }
    }
    return animations;
}

export default BubbleSort