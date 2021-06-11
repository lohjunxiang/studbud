import React, { useState } from 'react'
import Pomodoro from './components/timer-components/pomodoro'
import Tasks from './components/todo-components/Tasks'
import Footer from './components/FooterNav/Footer'
import MusicPlayer from './components/MusicPlayer'
import Kanban from './components/kanban/Kanban'
import AddTaskPopout from './components/todo-components/AddTaskPopout'
import TaskList from './components/todo-components/TaskList'

const dummyLists = [
  {
    metadata: {
      id: 'Task List flex',
      name: 'UI'
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
  const [page, setPage] = useState(2);
  const [isAddPopoutVisible, setIsAddPopoutVisible] = useState(false)
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


  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     taskTitle: 'Web App',
  //     taskName: 'Secondary Research',
  //     dueDate: '30 April 2021',
  //     priority: 'High',
  //     completion: true,
  //   },

  //   {
  //     id: 2,
  //     taskTitle: 'Web App',
  //     taskName: 'Personas',
  //     dueDate: '30 April 2021',
  //     priority: 'Medium',
  //     completion: false,

  //   }

  // ])

  const setListFactory = (listId) => (newList) => {
    console.log(newList)
    setLists(lists.map(taskList => {
      if (taskList.metadata.id !== listId) {
        return taskList;
      }

      return newList;
    }))
  }

  const render = () => {
    switch (page) {
      case 1:
        return (
          <>
            <Tasks
              setList={setListFactory(lists.filter(list => list.metadata.id === 'Task List flex')[0].metadata.id)}
              list={lists.filter(list => list.metadata.id === 'Task List flex')[0]}
              setIsAddPopoutVisible={setIsAddPopoutVisible} />
            <Pomodoro />
          </>
        )
      case 2:
        return (
          <div className='kanbanPageContainer'>
            <Kanban
              lists={lists.filter(list => list.metadata.id !== 'Task List flex')}
              setLists={setLists}
              onDragEnd={onDragEnd}
            />
            <div>
              <TaskList

                setList={setListFactory(lists.filter(list => list.metadata.id === 'Task List flex')[0].metadata.id)}
                list={lists.filter(list => list.metadata.id === 'Task List flex')[0]}
                setIsAddPopoutVisible={setIsAddPopoutVisible} />

              <div className='fullSizeSemiCircle' style={{
                backgroundColor: '#4C0625',
                position: 'absolute',
                top: '0',
                zIndex: 1,

              }}></div>

            </div>

          </div>
        )
      case 3:
        return (
          <div className='app'>
            <MusicPlayer />
          </div>
        )
    }
  }

  return (
    <div className="app">
      {render()}

      <Footer page={page} setPage={setPage} />
      {isAddPopoutVisible && <AddTaskPopout setIsAddPopoutVisible={setIsAddPopoutVisible} />}

    </div>
  );
}

export default App;
