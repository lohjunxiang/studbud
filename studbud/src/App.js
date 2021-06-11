import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Pomodoro from './components/timer-components/pomodoro'
import Tasks from './components/todo-components/Tasks'
import Footer from './components/FooterNav/Footer'
import MusicPlayer from './components/MusicPlayer'
import Kanban from './components/kanban/Kanban'
import AddTaskPopout from './components/todo-components/AddTaskPopout'
import AddBoardPopout from './components/todo-components/AddBoardPopout'
import ReferenceList from './components/ReferenceList'

const dummyLists = [
  {
    metadata: {
      id: 'Task List flex',
      name: 'Taskboard'
    },
    tasks: [
      {
        id: 'a',
        taskTitle: 'Web App',
        taskName: 'Persona',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: false,
      },
      {
        id: 'b',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
      {
        id: 'C',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
      {
        id: 'D',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
    ],
  },
  {
    metadata: {
      id: 'list-b',
      name: 'UX'
    },
    tasks: [
      {
        id: 'e',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
      {
        id: 'f',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
      {
        id: 'g',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
      {
        id: 'h',
        taskTitle: 'Web App',
        taskName: 'Secondary Research',
        dueDate: '30 April 2021',
        priority: 'High',
        completion: true,
      },
    ],
  },
];

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


function App() {
  const [page, setPage] = useState(4);
  const [isAddPopoutVisible, setIsAddPopoutVisible] = useState(false)
  const [isAddBoardPopoutVisible, setIsAddBoardPopoutVisible] = useState(false)
  const [lists, setLists] = useState(dummyLists);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(lists[sInd].tasks, source.index, destination.index);
      const newLists = [...lists];
      newLists[sInd].tasks = items;
      console.log(newLists)
      setLists(newLists);
    } else {
      const result = move(
        lists[sInd].tasks,
        lists[dInd].tasks,
        source,
        destination,
      );
      const newLists = [...lists];
      newLists[sInd].tasks = result[sInd];
      newLists[dInd].tasks = result[dInd];
      setLists(newLists);
    }
  }

  const setListFactory = (listId) => (newList) => {
    console.log(newList)
    setLists(lists.map(taskList => {
      if (taskList.metadata.id !== listId) {
        return taskList;
      }

      return newList;
    }))
  }

  function addTask(listId, newTask) {
    const updatedList = lists.filter(list => list.metadata.id === listId)[0];
    updatedList.tasks.push(newTask)
    setLists(lists.map(list => list.metadata.id !== listId ? list : updatedList))
  }

  function addBoard(newBoard) {
    const updatedLists = lists.concat(newBoard);
    setLists(updatedLists)
  }


  const render = () => {
    switch (page) {
      case 1:
        return (
          <>
            <DragDropContext onDragEnd={onDragEnd}>
              <Tasks
                setList={setListFactory('Task List flex')}
                list={lists[0]}
                setIsAddPopoutVisible={setIsAddPopoutVisible} />
            </DragDropContext>
            <Pomodoro />
          </>
        )
      case 2:
        return (
          <div className='kanbanPageContainer'>
            <Kanban
              lists={lists}
              setLists={setLists}
              onDragEnd={onDragEnd}
              setIsAddPopoutVisible={setIsAddPopoutVisible}
              setIsAddBoardPopoutVisible={setIsAddBoardPopoutVisible}

            />
          </div>
        )
      case 3:
        return (
          <div className='app'>
            <MusicPlayer />
          </div>
        )

      case 4:
        return (
          <div className='app'>
            <ReferenceList />
          </div>
        )
    }
  }

  return (
    <div className="app">
      {render()}

      <Footer page={page} setPage={setPage} />
      {isAddPopoutVisible && (
        <AddTaskPopout setIsAddPopoutVisible={setIsAddPopoutVisible} addTask={addTask} boards={lists.map(list => list.metadata)} />
      )}
      {isAddBoardPopoutVisible && <AddBoardPopout setIsAddBoardPopoutVisible={setIsAddBoardPopoutVisible} addBoard={addBoard} />}
    </div>
  );
}

export default App;
