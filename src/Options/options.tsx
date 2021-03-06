import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 100vh;
    float: left;
`;

const SliderValueWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 20vh;
`;

const Slider = styled.input<SliderProps>`
    display: flex;
    align-self: center;
    width: 20vw;
    transition: box-shadow 0.2s ease-in-out;
    overflow: hidden;
    height: 8vh;
    -webkit-appearance: none;
    &::-webkit-slider-runnable-track {
        height: 10px;
        cursor: pointer;
        box-shadow: #111;
        background: ${(props) =>
            `linear-gradient(to right, #F28482 0%, #F28482 ${props.plswork}%, #fff ${props.plswork}%, #fff 100%);`};
        border-radius: 10px;
        border-style: solid;
        transition: box-shadow 0.2s ease-in-out;
    }
  
    &::-webkit-slider-thumb {
        border: 0px solid #ffffff;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
        height: 30px;
        width: 22px;
        border-radius: 22px;
        background: #F7EDE2;
        cursor: ew-resize;
        -webkit-appearance: none;
        margin-top: -12px;
        transition: box-shadow 0.2s ease-in-out;
    }
    &:active::-webkit-slider-thumb {
        background: #F7EDE2;
        box-shadow: inset 0 0 0 3px #F28482;
        
    }
}
`;

interface SliderProps {
    plswork: number;
}

const SliderValueText = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
`;

const AlgoDropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AlgoDropdownText = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
`;

const AlgoDropdownList = styled.select`
    @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    align-text: center;
    align-self: center;
    width: 20vw;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #F5CAC3;
    }
`;

const AlgoOptions = ['Sort1', 'Sort2', 'Sort3', 'Sort4']

//you can't call react hooks in event functions


const Options = () => {
    const [rangeValue, setRangeValue] = useState("");
    //for typescript, you need React.ChangeEvent<HTML...> for event functions
    const DisplayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(e.target.value)
    }
    const math = Number(rangeValue) * 4.5;
    const test = Number(rangeValue);
    return (
        <Wrapper>
            <SliderValueWrapper>
                <SliderValueText>
                    Array Size: {rangeValue}
                </SliderValueText>
                <Slider type="range" min="2" max="20" plswork={math} onChange={e => DisplayValue(e)} />
            </SliderValueWrapper>
            <AlgoDropdownWrapper>
                <AlgoDropdownText>
                    Select an Algorithm
                </AlgoDropdownText>
                <AlgoDropdownList>
                    {AlgoOptions.map((option, index) => 
                    <option key={index} value={option}>{option}</option>
                    )}
                </AlgoDropdownList>
            </AlgoDropdownWrapper>
        </Wrapper>
    )
}

export default Options