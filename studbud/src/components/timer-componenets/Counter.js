import { useState, useCount } from 'react'


const Counter = ( {defaultTime, name, count, setCount} ) => {


    function decrementCount() {
        if (count >= 1)  setCount(count - 1);

    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <div className='timerContainer'>

            <h1> {name} </h1>

            <div className='timerGroup'>
                <button className='incrementBtn' onClick={incrementCount} >+</button>
                <h3> {count} mins </h3>
                <button className='incrementBtn' onClick={decrementCount} >-</button>
            </div>
        </div>
    )
}

export default Counter





