import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DOWN, RESET } from '../actions/index';

const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    };

    const abcClick = () => {
        setGlobalState({
            type: DOWN
        });
    };

    const resetClick = () => {
        setGlobalState({
            type: RESET
        });
    };

    console.log(globalState);

    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={abcClick}>-1</button>
            <button onClick={resetClick}>reset</button>
        </div>
    );
};

export default ComponentE;
