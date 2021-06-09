import { useState, useCount } from 'react'

const defaultBreakTime = 5;

const BreakTimer = () => {

    const [count, setCount] = useState( defaultBreakTime )

    function decrementCount() {

        if (count > 5) {
            setCount(count -1)
        } 

    }

    function incrementCount() {
        (count <= 45) ? setCount(count + 1) : alert('Your break time is too long');
        // setCount(count + 1)
    }

    return (
        <div className='timerContainer'>

            <h1>Break Time</h1>

            <div className='timerGroup'>
                <button className='incrementBtn' onClick={ incrementCount } >+</button>
                <h3> {count} mins</h3>
                <button className='incrementBtn' onClick={ decrementCount } >-</button>
            </div>
        </div>
    )
}

export default BreakTimer





