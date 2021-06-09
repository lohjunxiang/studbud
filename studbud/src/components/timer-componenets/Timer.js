import React, { useEffect, useState } from 'react'

function toClockDisplay(seconds) {

    const minuteDisplay = Math.trunc(seconds / 60);
    const secondDisplay = ("0" + (seconds % 60)).slice(-2);

    return `${minuteDisplay} : ${secondDisplay}`

}


const Timer = ({ focusTime, breakTime, session, start }) => {

    const [time, setTime] = useState(focusTime * 60)
    useEffect(() => {
        if (start) {

            setTimeout(() => {
                setTime(time - 1)
            }, 1000)

        }
    }, [time, start])


    return (
        <div className='timer' >
            <h1> {toClockDisplay(time)} </h1>
        </div>
    )
}

export default Timer
