 import { useState } from 'react';
import todoLogo from '../assets/todoLogo.svg'
 import styles from './Header.module.css'
  
   function props(onAddTask) {
      return(
        onAddTask(taskTitle)
        
      )
   }
 export function Header({onAddTask}) {
    const [title, setTitle] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
       
        onAddTask(title);
        setTitle("");
    }

     function onChangeTitle(event) {
        setTitle(event.target.value);
       
     }
    return(
        <header className={styles.header}> 
            <img src={todoLogo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input  placeholder='Adicione uma tarefa' onChange={onChangeTitle} value={title} />
                <button>Criar</button>
            </form>
        </header>
    )
 }