import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BubbleSort from '../Algorithms/bubblesort';
import './graph.scss';

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

interface DisplayGraphProps {
    graphArray : number[];
}

export const DisplayGraph: React.FC<DisplayGraphProps> = (props) => (
    <Wrapper>
        <GraphOutline>
            {props.graphArray.map((numbers, index) => (
                <div className='HeightBars' key={index} style={{
                    height: `${numbers}vh`,
                    backgroundColor: '#F28482'
                }}>
                </div>
            ))}
        </GraphOutline>
    </Wrapper>
);
