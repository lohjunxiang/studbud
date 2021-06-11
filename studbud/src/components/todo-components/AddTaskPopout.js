import React, {useState} from 'react'

const AddTaskPopout = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskName, setTaskName] =useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    return (
        <div className='addTaskPopout' style={{ display: 'flex', flexDirection: 'column'}}>
            <h1> Task Popout </h1>
            <input onChange={(event) => setTaskTitle(event.target.value)} value={taskTitle}/>
            <input onChange={(event) => setTaskName(event.target.value)} value={taskName}/>
            <input onChange={(event) => setDueDate(event.target.value)} value={dueDate}/>
            <input onChange={(event) => setPriority(event.target.value)} value={priority}/>

        </div>
    )
}

export default AddTaskPopout
