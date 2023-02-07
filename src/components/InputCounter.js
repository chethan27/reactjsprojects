import React, { useState, useEffect } from 'react';
import './Style.css';

const InputCounter = () => {

    const [inputValue, setInputValue] = useState('');
    const [count , setCount] = useState('');

    useEffect(() => {
        let i = count;
        let intervalId = setInterval(() => {
            setCount(i--);
            if (i < 0) {
                clearInterval(intervalId);
            }
        }, 300);

        return () => {
            clearInterval(intervalId);
        };
    }, [count]);

  return (
    <div className='inputContainer'>
        <label className='inputLabel'>Enter a Number between 0 to 100</label>
        <input className='inputField' type="number" value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}></input>
        <button className='submitButton' type='submit' onClick={() => setCount(inputValue)}>Submit</button>
        <span className='number'>{count}</span>
    </div>
  )
}

export default InputCounter;