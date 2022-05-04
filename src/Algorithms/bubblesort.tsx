import React from 'react';

//bubble sort: compare the elements beside one another and swap them 
//o(n)^2 time, o(1) space
let array: any[] = [1, 3, 2, 6, 5]

const BubbleSort = (arrayState: number[]) => {
    for (let i = 0; i < arrayState.length; i++){
        for (let j = 0; j < (arrayState.length - i - 1); j++){
            if (arrayState[j] > arrayState[j + 1]){
                let temp: number = arrayState[j]
                arrayState[j] = arrayState[j + 1]
                arrayState[j + 1] = temp
            }
        }
    }
    return arrayState;
}

export default BubbleSort