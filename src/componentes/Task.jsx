import React from 'react';
import "./Task.css"

const Task = ({task}) => {
  return <div className="task-contanier">{task.title}</div>
}
 
export default Task;