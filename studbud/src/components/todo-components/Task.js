import { FaEllipsisV } from "react-icons/fa";
import { useState, useEffect } from 'react'

const Task = ({ task, setTask }) => {

    const handleClick = (isCompleted) => {
        setTask({
            ...task,
            completion: isCompleted
        })
    }

    return (


        <div className='task' >

            <div className="checkboxContainer" onClick={() => handleClick(!task.completion)}>
                <input className='checkbox' type="checkbox" checked={task.completion} onChange={() => null}/>
                <span className="checkmark"></span>
            </div>

            <div className="taskContents">
                <h4> {task.taskTitle} </h4>
                <h3> {task.taskName} </h3>
                <h4> {task.dueDate} </h4>
                <h4> {task.priority} </h4>

            </div>
            <FaEllipsisV className='taskMenuIcon' />
        </div>
    )
}

export default Task
