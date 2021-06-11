import Button from '../timer-components/Button'
import Task from './Task'

const TaskList = ( {list, setIsAddPopoutVisible, setList, className='' } ) => {


    const setTaskFactory = (taskId) => (newTask) => {
        console.log(newTask)
          setList({
            metadata: list.metadata,
            tasks: list.tasks.map(task => {
              if (task.id !== taskId) {
                return task;
              }
      
              return newTask;
            })
          })
        }

    return (
        <div className={`taskListComponent ${className}`} >
            <div className='taskHeader'>
                <h1> Task List </h1>
                <Button onClick={() => setIsAddPopoutVisible(true)} className='btn' color="#005AB7" text={'Add Task'} />
            </div>

            {list.tasks.map((task) => (
                
                <Task 
                key={task.id} 
                task={task} 
                setTask={setTaskFactory(task.id)} />
            ))}

        </div>
    )
}

export default TaskList
