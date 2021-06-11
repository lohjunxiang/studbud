import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Task from '../todo-components/Task'

const DraggableTask = ({ id, index, task, setTask }) => {
  return (

    <div>
      <Draggable key={`${id}`} draggableId={`${id}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div
                style={{
                  // backgroundColor: 'blue',
                  color: 'white',
                }}
              >
                <Task task={task} setTask={setTask}/>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default DraggableTask;
