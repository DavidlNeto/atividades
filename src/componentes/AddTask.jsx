    import React, { useState } from 'react';
    import "./AddTask.css";
    import Button from "./Button"

    const AddTask = ({handleTaskAddition}) => {
      const [inputData, setInputData] = useState("");

      const handleInputChange = (e) => {
        setInputData(e.target.value);
      };

      const handleAddTaskClick = () => {
        handleTaskAddition (inputData);
        setInputData("");
      };
        return ( 
          <div className="add-task-contanier">
        <input onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text" 
        />
      
        <div className="add-task-button-contanier">
        <Button onClick={handleAddTaskClick}>adicionar</Button>
        </div>
        </div>
      );
    }
    
    export default AddTask;