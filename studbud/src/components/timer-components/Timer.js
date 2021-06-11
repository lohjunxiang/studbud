import React, { useEffect, useState } from 'react'

function toClockDisplay(seconds) {

    const minuteDisplay = Math.trunc(seconds / 60);
    const secondDisplay = ("0" + (seconds % 60)).slice(-2);

    return `${minuteDisplay} : ${secondDisplay}`

}


const Timer = ({ focusTime, breakTime, session, sessionPassed, setSessionPassed, start, isReset, setIsReset }) => {
    console.log(focusTime);
    const [time, setTime] = useState(focusTime * 10)
    const [isFocusTime, setIsFocusTime] = useState(true)
    const secsInMins = 60;


    useEffect(() => {
        if (start) {
            if (time === 0) {
            // if time reaches zero, run this if statement
            
                
                if (!isFocusTime) {
                // if it's break time that reaches zero, add a count to session
                    setSessionPassed(sessionPassed+1)
                }

                //set time to breakTime/focusTime if focusTime/breakTime reaches zero
                setTime((isFocusTime ? breakTime : focusTime) * secsInMins)
                //useState statement = not(true/false)
                setIsFocusTime(!isFocusTime)
            } else {
                //decrease time counter by 1 every 1000millisecond
                setTimeout(() => {
                    setTime(time - 1)
                }, 1000)
            }
        }
    }, [time, start])

    useEffect ( () => {
        if (isFocusTime) setTime(focusTime * secsInMins)
    }, [focusTime])

    useEffect(() => {
        if (!isFocusTime) {
            setTime(breakTime * secsInMins)
        }
    }, [breakTime])

    useEffect( () => {
        if(isReset===true) {
            // setTime(0)
            setTime((focusTime) * secsInMins)
            setSessionPassed(0)
            setIsReset(false)
        }
    }, [isReset])




    return (
        <div className='timer' >
            <h1> {toClockDisplay(time)} </h1>
        </div>
    )
}

export default Timer
