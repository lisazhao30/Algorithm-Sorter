import React from 'react';

//bubble sort: compare the elements beside one another and swap them 
//o(n)^2 time, o(1) space

const BubbleSort = (arrayState: number[]) => {
    const animatedArray: (string | number)[][] = [];
    for (let i = 0; i < arrayState.length; i++){
        for (let j = 0; j < (arrayState.length - i - 1); j++){
            animatedArray.push(['comparing', j, j + 1])
            if (arrayState[j] > arrayState[j + 1]){
                animatedArray.push(['swapping', j, j + 1])
                let temp: number = arrayState[j]
                arrayState[j] = arrayState[j + 1]
                arrayState[j + 1] = temp
            }
        }
        animatedArray.push(['index', arrayState.length - i - 1])
    }
    return animatedArray;
}

export default BubbleSort