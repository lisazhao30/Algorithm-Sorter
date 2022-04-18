import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    float: right;
    width: 60vw;
    height: 100vh;
    `;

const GraphOutline = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    height: 60vh;
    margin: 5vh 5vw;
`;

interface HeightBarsProps {
    height: string;
    key?: number;
}

//to pass props, you need to define an interface prop
const HeightBars = styled.div<HeightBarsProps>`
    height: ${props => props.height};
    width: 40vw;
    background-color: pink;
    margin: 0 0.2vw 0 0.2vw;
`;

//returns random number between 1 and 100
const Number: string = `${Math.floor((Math.random() * 100) + 1)}vh`
console.log(Number);

const randomNumber = () => {
    return `${Math.floor((Math.random() * 60) + 1)}vh`
}

interface DisplayGraphProps {
    rangeNumber : number;
}

export const DisplayGraph: React.FC<DisplayGraphProps> = (props) => {
    let j = 1;
    const graphArray = [];
    //let user change i
    if (props.rangeNumber > 1) {
        while (j < props.rangeNumber + 1){
            graphArray.push(randomNumber());
            j++;
        }
    }
    return (
        <Wrapper>
            <GraphOutline>
                {graphArray.map((numbers, index) => 
                <HeightBars height={numbers} key={index} />)}
            </GraphOutline>
        </Wrapper>
    )
}

//you don't need to use return () when you can just not use {}
// const Graph = () => {
//     return (
//         <Wrapper>
//             <GraphOutline>
//                 {GraphArrayFunction(10).map((numbers, index) => 
//                 <HeightBars height={numbers} />)}
//             </GraphOutline>
//         </Wrapper>
//     )
// }

// export default Graph
