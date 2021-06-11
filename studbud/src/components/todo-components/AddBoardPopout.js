import React, { useState } from 'react'
import Button from '../timer-components/Button'


const AddBoardPopout = ({ setIsAddBoardPopoutVisible, addBoard }) => {
    const [boardName, setBoardName] = useState('');

    function handleAddTask() {
        const newBoard = {
            metadata: {
                id: new Date().valueOf(),
                name: boardName
            },
            tasks: []
        }
        addBoard(newBoard)
        setIsAddBoardPopoutVisible(false)
    }

    return (
        <div className='addTaskPopout'>
            <div className='addTaskForms'>

                <Button 
                   color='red'
                   font='#005AB7'
                   text='Close'
                   className='btnStartReset'
                   onClick={() => setIsAddBoardPopoutVisible(false)}
                   style={{ position: 'absolute', top: '0', right: '0' }}
                   ></Button>

                <h1> Add Board Popout </h1>

                <label for="boardName">Board Name:</label>
                <input onChange={(event) => setBoardName(event.target.value)} value={boardName} />

                <Button 
                 color='#005AB7'
                 text='ADD'
                 className='btnStartReset'
                onClick={() => handleAddTask()}
                style={{margin: '50px 0 0 0'}}> </Button>
            </div>
        </div>
    )
}

export default AddBoardPopout
