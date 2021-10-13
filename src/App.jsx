import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Header from "./componentes/Header"
import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import "./App.css";
import TaskDetails from "./componentes/TaskDetails";


const App = () => {
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

const handleTaskDeletion = (taskId) => {
  const newTasks = tasks.filter (task => task.id !== taskId)

  setTasks(newTasks)

}
  
  return(
    <Router>
    <div className="contanier">
   <Header/>
   <Route path="/" 
   exact
    render={() => (
     <>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} 
      handleTaskClick={handleTaskClick} 
      handleTaskDeletion={handleTaskDeletion}
       />
     </>

   )}
   />
   <Route path ="/:taskTitle" exact component ={TaskDetails} />
    </div>
      </Router>
  );
};
 
export default App;