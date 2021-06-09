import React, { useState } from 'react'
import Button from './Button'
// import styled from 'styled-components'
// import Icons from './Icons'
import { FaRegSun } from 'react-icons/fa'
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


    return (
        <div className='container'>
            <div>
            <h1>Pomodoro</h1>
                <div className='pomodoroTabGroup'>

                    {/* settings Icons */}
                    <FaRegSun />

                    {/* Stopwatch Button */}
                    <Button
                        color={tab === 1 ? active : inactive}
                        text='STOPWATCH'
                        onClick={() => setTab(1)}
                    />

                    {/* Pomodoro Button */}
                    <Button
                        color={tab === 2 ? active : inactive}
                        text='POMODORO'
                        onClick={() => setTab(2)}
                    />
                </div>

            </div>

            {/* Main Timer */}
            <Timer
                focusTime= {focusTime}
                breakTime= {breakTime}
                session= {session}
                start= { startBtn === 'PAUSE'}
            />

            <div className='timeSettings'>

                <Counter
                    name='Focus Time'
                    count={focusTime} 
                    setCount={setFocusTime}
                />

                <Counter
                    name='Break Time'
                    count={breakTime} 
                    setCount={setBreakTime}
                />

            </div>

            {/* start button */}
            <Button
                color='white'
                font='#005AB7'
                text={startBtn}
                className='btnStart'
                onClick={(e) => {
                    e.preventDefault()
                    startBtn === 'START' ? setStartBtn('PAUSE') : setStartBtn('START')
                }}
            />
            <div>
                <Counter
                    name='no. of Sessions'
                    count={session} 
                    setCount={setSession}
                />
            </div>




        </div>
    )

}

export default Pomodoro;
