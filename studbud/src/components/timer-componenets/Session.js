import { useState, useCount } from 'react'

const defaultSession = 4;

const Session = () => {

    const [count, setCount] = useState( defaultSession )

    function decrementCount() {

        if (count > 0) {
            setCount(count -1)
        } 

    }

    function incrementCount() {
        (count <= 15) ? setCount(count + 1) : alert('Do not overwork yourself');
        // setCount(count + 1)
    }

    return (
        <div className='timerContainer'>

            <h1>no. of Sessions</h1>

            <div className='timerGroup'>
                <button className='incrementBtn' onClick={ incrementCount } >+</button>
                <h3> {count} </h3>
                <button className='incrementBtn' onClick={ decrementCount } >-</button>
            </div>
        </div>
    )
}

export default Session





