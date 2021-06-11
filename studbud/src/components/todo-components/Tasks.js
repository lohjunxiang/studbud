import TaskList from './TaskList'



const Tasks = ({ list, setIsAddPopoutVisible, setList }) => {



  return (
    <div className='taskAndSemiCircleContainer'>

      <div className='taskContainer'>

        <TaskList
          droppableId={0}
          className='pomodoroTaskList'
          list={list}
          setIsAddPopoutVisible={setIsAddPopoutVisible}
          setList={setList}
        />

        <div className='taskContainerSemiCircle'>

        </div>
      </div>

    </div>
  )
}

export default Tasks
