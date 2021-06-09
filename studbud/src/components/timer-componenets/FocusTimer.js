import { useState, useCount } from 'react'

const defaultFocusTime = 25;

const FocusTimer = () => {

    const [count, setCount] = useState( defaultFocusTime )

    // useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // }, [count]);

    function decrementCount() {
        (count >= 6) ? setCount(count -1) : alert('Your focus time is too short');

        // if (count > 5) {
        //     setCount(count -1)
        // } 

    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <div className='timerContainer'>

            <h1>Focus Time</h1>

            <div className='timerGroup'>
                <button className='incrementBtn' onClick={ incrementCount } >+</button>
                <h3> {count} mins</h3>
                <button className='incrementBtn' onClick={ decrementCount } >-</button>
            </div>
        </div>
    )
}

export default FocusTimer





