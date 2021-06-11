import Button from '../timer-components/Button'
import { Droppable } from 'react-beautiful-dnd';
import DraggableTask from '../kanban/DraggableTask';

const TaskList = ({ list, droppableId, setIsAddPopoutVisible, setList, className = '' }) => {
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
        <Droppable droppableId={`${droppableId}`}>
            {(provided) => {
                return (
                    <div className={`taskListComponent ${className}`} >
                        <div className='taskHeader'>
                            <h1> Task List </h1>
                            <Button
                                onClick={() => setIsAddPopoutVisible(true)}
                                className='btn' color="#005AB7"
                                text={'Add Task'} />
                        </div>
                        <div
                            style={{ overflowY: 'scroll', overflowX: 'none', height: '70vh', width: '90%' }}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {list.tasks.map((task, index) => (
                                <DraggableTask
                                    index={index}
                                    id={task.id}
                                    key={task.id}
                                    task={task}
                                    setTask={setTaskFactory(task.id)}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                );
            }}
        </Droppable>
    )
}

export default TaskList
