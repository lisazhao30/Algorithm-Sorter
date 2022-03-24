import React from 'react';
import styled from 'styled-components';

//you should not write all of this in one big function
export const Graph = () => {

    //returns random number between 1 and 100
    const Number: number = Math.floor((Math.random() * 100) + 1)
    console.log(Number);

    const graphArrayFunction = () => {
        let i = 0;
        const graphArray = [];
        //let user change i
        while (i < 10){
            graphArray.push(Number);
        }
        console.log(graphArray);
    }
    graphArrayFunction();

    return (
        <div>

        </div>
    )
}

const Wrapper = styled.div`
    display: flex;

`;

const graphDisplay = () => {
    return (
        <Wrapper>
            
        </Wrapper>
    )
}