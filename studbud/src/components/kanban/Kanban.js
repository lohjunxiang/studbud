import React, { useState, useEffect } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import DroppableList from './DroppableList';
import Button from '../timer-components/Button.js';
import TaskList from '../todo-components/TaskList.js';
import Task from '../todo-components/Task';

function Kanban({lists, setLists, onDragEnd }) {

  useEffect(() => {
    console.log(lists)
  }, [lists])

  const setListFactory = (listId) => (newList) => {

    // console.log(newList)
    setLists(lists.map(taskList => {
      if (taskList.metadata.id !== listId) {
        return taskList;
      }

      return newList;
    }))
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='kanbanContainer'>
        <div className='taskHeader'>
          <h1> KANBAN </h1>
          <Button className='btn' color="#005AB7" text={'Add Board'} />
        </div>

        <div className='kanbanBoardContainer' style={{ display: 'flex' }}>
          {lists.map((list, index) => {
            return (
              <DroppableList
                id={list.metadata.id}
                key={list.metadata.id}
                metadata={list.metadata}
                droppableId={index}
                tasks={list.tasks}
                setList={setListFactory(list.metadata.id)}
              />
            );
          })}
        </div>
      </div>

      <div>


      </div>

    </DragDropContext>

  );
}

export default Kanban;
