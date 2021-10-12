import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import "./App.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';

const APP = () => {
  //let message = "hello word";
  const [tasks, setTasks ] = useState([
    {
      id: "1",
      title: " estudando programação",
      completed: false,
    },
    {
      id: "2",
      title: "ler livros",
      completed: true,
    }
  ]);
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) return {...task, completed: !task.completed}
      return task;
    })
    setTasks(newTasks)
  }
const handleTaskAddition = (taskTitle) => {
  const newTasks = [...tasks,{
    title:taskTitle,
    id: uuidv4(),
    completed: false,
  },
];
setTasks(newTasks);
}
  
  return(
    <>
    <div className="contanier">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>
    </div>
      </>
  );
};
 
export default APP;