import React from 'react'
import Pomodoro from './components/timer-componenets/pomodoro.js'
import Tasks from './components/todo-componenets/Tasks.js'
import { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Web App',
      taskName: 'Secondary Research',
      dueDate: '30 April',
      priority: 'High',
      completion: true,
    },

    {
      id: 2,
      title: 'Web App',
      taskName: 'Personas',
      dueDate: '30 April',
      priority: 'Medium',
      completion: false,

    }

  ])
  
  return (
    <div className="App">

      <Pomodoro />
      <Tasks tasks={tasks} />

    </div>
  );
}

export default App;
