import React, { useState } from 'react'
import { FaRegSun } from 'react-icons/fa'
import Button from '../timer-components/Button'


const AddTaskPopout = ({ setIsAddPopoutVisible, addTask, boards = [] }) => {
    const [selectedBoard, setSelectedBoard] = useState(boards[0].id);
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    function handleAddTask() {
        const newTask = {
            id: new Date().valueOf(),
            taskName,
            dueDate,
            priority,
            completion: false,
        }
        addTask(selectedBoard, newTask)
        setIsAddPopoutVisible(false)
    }


    return (
        <div className='addTaskPopout'>
            <div className='addTaskForms'>
                <Button
                    color='red'
                    font='#005AB7'
                    text='Close'
                    className='btnStartReset'
                    onClick={() => setIsAddPopoutVisible(false)}
                    style={{ position: 'absolute', top: '0', right: '0' }}
                >
                </Button>


                <h1> Task Popout </h1>


                <label for="taskTitle">Task Title:</label>

                <select name="boards" onChange={(event) => setSelectedBoard(event.target.value)} >
                    {boards.map(board => <option value={board.id}>{board.name}</option>)}
                </select>

                <label for="taskTitle">Task Name:</label>
                <input onChange={(event) => setTaskName(event.target.value)} value={taskName} />
                <label for="taskTitle">Due Date:</label>
                <input onChange={(event) => setDueDate(event.target.value)} value={dueDate} />
                <label for="Priority">Priority:</label>
                <input onChange={(event) => setPriority(event.target.value)} value={priority} />

                <Button
                    color='white'
                    font='black'
                    text='ADD'
                    className='btnStartReset'
                    onClick={() => handleAddTask()}
                    style={{ margin: '50px 0 0 0' }}> 
                    </Button>

            </div>

        </div>
    )
}

export default AddTaskPopout
