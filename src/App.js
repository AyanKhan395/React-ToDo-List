import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
  const [toDoList, setToDoList ] = useState(data);
  const [userInput, setUserInput ] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [pirority, setPirority ] = useState('');


  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput, startDate, pirority ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1,
                        task: userInput,
                        complete: false,
                        date: startDate,
                        priority: pirority }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask} userInput={userInput} setUserInput={setUserInput} startDate={startDate} setStartDate={setStartDate} pirority={pirority} setPirority={setPirority} />
    </div>
  );
}

export default App;
