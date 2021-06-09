const Task = ({ task }) => {
    return (
        <div className='task'>
            <p> {task.title} </p>
            <h3> {task.taskName} </h3>
            <p> {task.dueDate} </p>
            <p> {task.priority} </p>
        </div>
    )
}

export default Task
