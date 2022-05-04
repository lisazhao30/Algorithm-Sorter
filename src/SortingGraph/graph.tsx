import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BubbleSort from '../Algorithms/bubblesort';

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
    color: string;
}

//to pass props, you need to define an interface prop
const HeightBars = styled.div<HeightBarsProps>`
    height: ${props => props.height};
    width: 40vw;
    background-color: ${props => props.color};
    margin: 0 0.2vw 0 0.2vw;
`;

//returns random number between 1 and 100


const Number: string = `${Math.floor((Math.random() * 100) + 1)}vh`
console.log(Number);

const default_color: string = '#4A148C';
const swap_color: string = '#F4511E';
// const [styledColor, setStyledColor] = useState('')


export const StartAnimations = (arrayState: number[]) => {
    // for (let i = 0; i < arrayState.length; i++){
    //     if (i === arrayState.length - 1 || i === arrayState.length - 2 || i === arrayState.length - 3){
    //         setTimeout(() => {
    //             setStyledColor('#F4511E');
    //         }, i * 4)
    //     }
    // }
    // for (let i = 0; i < arrayState.length; i++){
    //     const changeColor = selectedOption[i] === "first-comparison" || selectedOption[i] === "second-comparison";
    //     if (changeColor){
    //         const [change] = selectedOption[i];
    //         const color = (change === "first-comparison" ? default_color : swap_color);
    //     }
    // }
}

interface DisplayGraphProps {
    graphArray : number[];
    isSwapping: boolean;
}

export const DisplayGraph: React.FC<DisplayGraphProps> = (props) => {
    const [styledColor, setStyledColor] = useState('#4A148C');
    // let color;
    return (
        <Wrapper>
            <GraphOutline>
                {props.graphArray.map((numbers, index) => {
                        for (let i = 0; i < props.graphArray.length; i++){
                            if (i === props.graphArray.length - 1 || i === props.graphArray.length - 2 || i === props.graphArray.length - 3){
                                setTimeout(() => {
                                    setStyledColor('#F4511E');
                                }, i * 4)
                            }
                        }
                    // props.isSwapping ? (color = '#F4511E') : color = '#4A148C'
                return (
                    <HeightBars height={`${numbers}vh`} key={index} color={styledColor}/>
                )})}
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
