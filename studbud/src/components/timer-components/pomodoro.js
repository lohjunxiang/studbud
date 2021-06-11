import React, { useState } from 'react'
import Button from './Button'
// import styled from 'styled-components'
// import Icons from './Icons'
// import { FaRegSun } from 'react-icons/fa'
import Counter from './Counter'
import Timer from './Timer'


const Pomodoro = props => {
    const inactive = '#005AB7'
    const active = '#004185'
    const [startBtn, setStartBtn] = useState('START')
    const [tab, setTab] = useState(1)
    const [focusTime, setFocusTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)
    const [session, setSession] = useState(4)
    const [sessionPassed, setSessionPassed] = useState(0)
    const [isReset, setIsReset] = useState(false)


    return (
        <div className='container'>
            <div>
                <h1 style={{ textAlign: 'center' }} >Pomodoro</h1>

                <div className='pomodoroTabGroup'>

                    {/* Pomodoro Button */}
                    <Button
                        color={tab === 1 ? active : inactive}
                        text='POMODORO'
                        onClick={() => setTab(1)}
                    />

                    {/* Stopwatch Button */}
                    <Button
                        color={tab === 2 ? active : inactive}
                        text='STOPWATCH'
                        onClick={() => setTab(2)}
                    />

                </div>

            </div>

            {/* Main Timer */}
            <Timer
                focusTime={focusTime}
                breakTime={breakTime}
                session={session}
                setSession={setSession}
                start={startBtn === 'PAUSE'}
                sessionPassed={sessionPassed}
                setSessionPassed={setSessionPassed}
                isReset={isReset}
                setIsReset={setIsReset}
            />

            <div className='timeSettings'>

                <Counter
                    name='Focus Time'
                    count={focusTime}
                    setCount={setFocusTime}
                    text={`${focusTime} mins`}
                    start={startBtn === 'PAUSE'}
                />

                <Counter
                    name='Break Time'
                    count={breakTime}
                    setCount={setBreakTime}
                    text={`${breakTime} mins`}
                    start={startBtn === 'PAUSE'}
                />
                
                <Counter
                    name='no. of Sessions'
                    count={session}
                    setCount={setSession}
                    start={startBtn === 'PAUSE'}
                    text={`${sessionPassed}/${session}`}

                />

            </div>
            <div className='startResetBtnContainer'>
                {/* start button */}
                <Button
                    color='white'
                    font='#005AB7'
                    text={startBtn}
                    className='btnStartReset'
                    onClick={(e) => {
                        e.preventDefault()
                        startBtn === 'START' ? setStartBtn('PAUSE') : setStartBtn('START')
                    }}
                />

                <Button
                    text='RESET'
                    font='#005AB7'
                    onClick={() => (setIsReset(true))}
                    className='btnStartReset'
                    start={startBtn === 'PAUSE'}

                />
            </div>

        </div>
    )

}

export default Pomodoro;
