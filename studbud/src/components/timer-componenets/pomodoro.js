import React, { useState } from 'react'
import Button from './Button'
// import styled from 'styled-components'
// import Icons from './Icons'
import { FaRegSun } from 'react-icons/fa'
import FocusTimer from './FocusTimer'
import BreakTimer from './BreakTimer'
import Session from './Session'


const Pomodoro = props => {
    const [startBtn, setStartBtn] = useState('START')



    return (
        <div className='container'>
            <h1>Pomodoro</h1>
            <div>
                <div className='pomodoroTabGroup'>

                    {/* settings Icons */}
                    <FaRegSun />


                    {/* Pomodoro Timer */}
                    <Button color='#005AB7' text='STOPWATCH' />
                    <Button color='#005AB7' text='POMODORO' />
                </div>

            </div>
            <h1>Timer Here</h1>

            <div className='timeSettings'>
                <FocusTimer />
                <BreakTimer />
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
                <Session />
            </div>




        </div>
    )

}

export default Pomodoro;
