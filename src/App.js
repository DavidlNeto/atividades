import React, {useState} from 'react';
import "./App.css";

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
  
  return(
    <>
    <div className="contanier"></div>
      </>
  );
};
 
export default APP;