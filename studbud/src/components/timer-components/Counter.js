
const Counter = ( {start, name, count, setCount, text, } ) => {
    

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
                <button className='incrementBtn' onClick={incrementCount} disabled={start} >+</button>
                <h3> {text} </h3>
                <button className='incrementBtn' onClick={decrementCount} disabled={start} >-</button>
            </div>
        </div>
    )
}

export default Counter





