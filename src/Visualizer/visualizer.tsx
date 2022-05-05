import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { DisplayGraph } from '../SortingGraph/graph';
import BubbleSort from '../Algorithms/bubblesort';
import QuickSort from '../Algorithms/quicksort';
import MergeSort from '../Algorithms/mergesort';

const Visualizer = () => {

    const LeftWrapper = styled.div`
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


    interface SliderProps {
        changeSliderColor: number;
    }

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
                `linear-gradient(to right, #F28482 0%, #F28482 ${props.changeSliderColor}%, #fff ${props.changeSliderColor}%, #fff 100%);`};
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

    const SliderValueText = styled.h2`
        @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
        font-family: 'Barlow', sans-serif;
        font-size: 20px;
    `;

    const AlgoDropdownWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
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

    const StartButton = styled.button`
        color: black;
        background-color: #F28482;
        width: 5vw;
        height: 3vh;
        border-radius: 8%;
        border: 2px solid #F28482;
        cursor: pointer;
        margin-top: 2vh;
        &:hover {
            transform: scale(1.1);
        }
    `
    const default_color: string = '#AFD0D6';
    const swap_color: string = '#F28482';
    const next_color: string = '#D2E59E';
    const [rangeValue, setRangeValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('BubbleSort');
    const [arrayState, setArrayState] = useState<number[]>([]);
    const graphBar = document.getElementsByClassName('HeightBars') as HTMLCollectionOf<HTMLElement>;
    //for typescript, you need React.ChangeEvent<HTML...> for event functions

    const DisplayValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(e.target.value)
    }
    const AlgoOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedOption(value);
    }

    const AlgoOptions = [
        {DisplayName: 'Bubble Sort', FunctionName: 'BubbleSort'},
        {DisplayName: 'Quick Sort', FunctionName: 'QuickSort'},
        {DisplayName: 'Merge Sort', FunctionName: 'MergeSort'}
    ]

    const setArray = () => {
        let j = 1;
        const graphArray = []
        //let user change i
        if (Number(rangeValue) > 1) {
            while (j < Number(rangeValue) + 1){
                graphArray.push(Math.floor((Math.random() * 60) + 1));
                j++;
            }
        }
        setArrayState(graphArray);
    }

    useEffect(() => {
        setArray()
    }, [rangeValue])

    const StartAnimating = (animatedArray: (string | number)[][]) => {
        let lastIndex = 0;
        for (let i = 0; i < animatedArray.length; i++){
            const [type, barOne, barTwo] = animatedArray[i]
            const barOneStyle = graphBar[barOne as number].style;
            const doesBarTwoExist: boolean = (barTwo as number) < arrayState.length && Number.isInteger(barTwo as number);
            const barTwoStyle = graphBar[doesBarTwoExist ? barTwo as number : barOne as number].style;
            switch(type){
                case 'index':
                    setTimeout(() => {
                        if (lastIndex !== barOne){
                            graphBar[lastIndex as number].style.backgroundColor = default_color;
                            barOneStyle.backgroundColor = default_color;
                            lastIndex = barOne as number;
                        }
                    }, i * 100)
                    break;
                case 'comparing':
                    setTimeout(() => {
                        if (barOne !== lastIndex){
                            barOneStyle.backgroundColor = swap_color
                        }
                        if (barTwo !== lastIndex){
                            barTwoStyle.backgroundColor = next_color
                        }
                    }, i * 100)
                    break;
                case 'swapping': //swap heights of the bars
                    setTimeout(() => {
                        if (doesBarTwoExist){
                            const barOneHeight = barOneStyle.height;
                            barOneStyle.height = barTwoStyle.height;
                            barTwoStyle.height = barOneHeight;
                        }
                    }, i * 100)
                    break;
                default:
                    break;
            }
        }
    } 

    return (
        <>  
            <LeftWrapper>
                <SliderValueWrapper>
                    <SliderValueText>
                        Array Size: {rangeValue}
                    </SliderValueText>
                    <Slider type="range" min="2" max="20" changeSliderColor={Number(rangeValue) / 20 * 100} value={rangeValue} onChange={e => DisplayValue(e)} />
                </SliderValueWrapper>
                <AlgoDropdownWrapper>
                    <AlgoDropdownText>
                        Select an Algorithm
                    </AlgoDropdownText>
                    <AlgoDropdownList onChange={AlgoOption} value={selectedOption}> {/* for select html tag, you need to add value = usestate when using onChange*/}
                        {AlgoOptions.map((option, index) => 
                            <option key={index} value={option.FunctionName}>{option.DisplayName}</option>
                        )}
                    </AlgoDropdownList>
                    <StartButton onClick={() => selectedOption.includes('BubbleSort') ? StartAnimating(BubbleSort(arrayState)) : 
                    selectedOption.includes('QuickSort') ? StartAnimating(QuickSort(arrayState)) : null}>Start</StartButton>
                </AlgoDropdownWrapper>
            </LeftWrapper>
            <DisplayGraph graphArray={arrayState} />
        </>
    )
}

export default Visualizer