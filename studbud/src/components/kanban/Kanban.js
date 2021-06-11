import React, { useState, useEffect } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import DroppableList from './DroppableList';
import Button from '../timer-components/Button.js';
import TaskList from '../todo-components/TaskList.js';
import Task from '../todo-components/Task';

function Kanban({ lists, setLists, onDragEnd, setIsAddPopoutVisible, setIsAddBoardPopoutVisible }) {

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
          <Button className='btn' color="#005AB7" text={'Add Board'} onClick={() => setIsAddBoardPopoutVisible(true)}/>
        </div>

        <div className='kanbanBoardContainer' style={{ display: 'flex', overflowX: 'scroll', overflowY: 'hidden' }}>
          {lists.slice(1).map((list, index) => {
            return (
              <DroppableList
                id={list.metadata.id}
                key={list.metadata.id}
                metadata={list.metadata}
                droppableId={index + 1}
                tasks={list.tasks}
                setList={setListFactory(list.metadata.id)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <TaskList
          droppableId={0}
          setList={setListFactory(lists.filter(list => list.metadata.id === 'Task List flex')[0].metadata.id)}
          list={lists[0]}
          setIsAddPopoutVisible={setIsAddPopoutVisible} 
        />
        {/* Semicircle */}
        <div className='fullSizeSemiCircle' style={{
          backgroundColor: '#4C0625',
          position: 'absolute',
          top: '0',
          zIndex: 1,

        }} />

        {/* Translucent background */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            width: '100%',
            height: '90vh',
            position: 'absolute',
            top: '0',
            zIndex: 2,

          }} >
        </div>

      </div>

      <div>


      </div>

    </DragDropContext>

  );
}

export default Kanban;
