 import trashLogo from '../../assets/trash.svg'
 import styles from '../Tarefa/Tarefa.module.css'
 
    
 function TwoDelete(onDelete) {
  return(
      onDelete()
  )
} 
function onC(onComplete) {
  return(
    onComplete()
  )
}
 export function Tarefa({task, onDelete, onComplete}){
    return(
      <div className={styles.task}>
     <button 
     className={styles.checkContainer} 
     onClick={()=> onComplete(task.id)}>
      <div></div>
     </button>
      <p>{task.title} </p>
      
      
       <button 
       className={styles.deleteButton} 
       onClick={()=> onDelete(task.id)}>
        <img src={trashLogo} alt="" />
       </button>
       </div>
    )
}