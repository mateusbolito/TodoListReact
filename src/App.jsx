import { Header } from './Header/Header';
import styles from'./App.module.css';
import { Tasks } from './components/Task';
import { useState } from 'react';



function App() {
  const [tasks, setTasks] = useState([{
    id: 'teste',
    title: 'teste',
    isCompleted: true,
  
  },
  {
    id: 'teste 2',
    title: 'teste',
    isCompleted: false,
    
  }
])
  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }
    function deleTaskById(taskId) {
      const newTasks = tasks.filter((task)=> task.id !== taskId);
      setTasks(newTasks);
    }

     function toggleTaskCompletedById(taskId) {
      const newTasks = tasks.map((task)=> {
        if(task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      }) 
      setTasks(newTasks)
     }
  return (
    <>
    <Header onAddTask={addTask} />
    <Tasks tasks={tasks} onDelete={deleTaskById} onComplete={toggleTaskCompletedById} />
    </>
  )
    
    
}

export default App
