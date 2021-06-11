import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableTask from './DraggableTask';
import { FaPlus } from 'react-icons/fa';



function DroppableList({ droppableId, tasks = [], id, metadata, setList }) {
  // const [taskList, setTaskList] = useState(tasks)
  console.log('droppable:', tasks)

  const setTaskFactory = (taskId) => (newTask) => {
    setList({
      metadata,
      tasks: tasks.map(task => {
        if (task.id !== taskId) {
          return task;
        }

        return newTask;
      })
    })
  }

  return (


    <Droppable droppableId={`${droppableId}`} key={id}>
      {(provided) => {
        return (
          <div style={{ width: "27%" }}>

            <div className='kanbanBoardHeader'>
              <h1>{metadata.name}</h1>
              <FaPlus />
            </div>

            <div
              style={{ overflowY: 'scroll', maxHeight: '70vh' }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <DraggableTask key={index} id={task.id} index={index} task={task} setTask={setTaskFactory(task.id)}/>
              ))}
              {provided.placeholder}
            </div>

          </div>

        );
      }}
    </Droppable>


  );
}

export default DroppableList;
