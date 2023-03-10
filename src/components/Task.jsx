import { Tarefa } from './Tarefa/Task'
import styles from './Tasks/Task.module.css'
import  Clipboard from '../assets/Clipboard.svg'
  
function Delete(onDelete,) {
    return(
        onDelete()
    )    
} 
 function Complete(onComplete) {
    return(
        onComplete()
    )
 }
export function Tasks({tasks, onDelete, onComplete}){
   
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter((task)=> task.isCompleted).length;
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
            <div>
                <p>Tarefas criadas</p>
                <span>{taskQuantity} </span>
            </div>

            <div>
                <p className={styles.textPurple}>Concluidas</p>
                <span>{completedTasks} de {taskQuantity} </span>
            </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task)=>(
                    <Tarefa key={task.id} task={task}  onDelete={onDelete} onComplete={onComplete} />
                ))}
                {tasks.length <= 0 && (
                    <section  className={styles.emptygit}>
                       <img src={Clipboard} /> 
                       <div>
                        <p>Voce aind anao tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus items</span>
                       </div>
                    </section>
                )}
            </div>
        </section>
    )
}