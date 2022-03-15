import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import TextField from "@mui/material/TextField";
import search from './search';

function App() {
  
  const [toDoList, setToDoList ] = useState(data);
  const [userInput, setUserInput ] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [pirority, setPirority ] = useState('Low');
  const [inputText, setInputText] = useState("");

  // const inputHandler = (e) => {
  //   //convert input text to lower case
  //   console.log(e.target.value)
  //   let filtered = toDoList.filter.includes(e.target.value)
  //   setToDoList(filtered);
  // };

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleSearch = (inputValue) =>{
    let filtered = toDoList.filter.includes(inputValue);
    setToDoList(filtered);
  }

  const handleSearch11 = ((search) =>{
    if (search === '') {
     // return el;
    }
    //return the item which contains the user input
    else {
      let filtered = toDoList.filter.includes(search)(task => {
        return !task.complete;
      });
        return search.text.toLowerCase().includes(search)
    }
  })

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
      <div class="row">
        <div class="col-lg-4 col-md-3 col-sm-2"></div>

        <div class="col-lg-4 col-md-6 col-sm-8">
          <ToDoForm addTask={addTask} userInput={userInput} setUserInput={setUserInput} 
          startDate={startDate} setStartDate={setStartDate} pirority={pirority} setPirority={setPirority}/>
        </div>

        <div class="col-lg-4 col-md-3 col-sm-2"></div>
      </div>
<div style={{marginBlock: "20px"}}>
  <div class="container" style={{display: 'inline', padding: '2px 0px',  border: '2px solid black'}}>
    <input placeholder=" Search . . ."  value={inputText} onChange={(e)=>setInputText(e.target.value)} style={{border: "none", outline: "none"
    }}></input>
    <div style={{alignContent: 'center',backgroundColor: "#0091C0", display: 'inline', padding: "2px", paddingLeft: "8px", paddingRight: "8px", borderColor:"black", borderLeft: "2px solid black"}}>
      <i class="fa fa-search" ></i>
      </div>
    </div>
  </div>
      
      <div class="row">
        <div class="col-sm-2"></div>

        <div class="col-sm-8">
          <ToDoList toDoList={toDoList} search={inputText} handleToggle={handleToggle} handleFilter={handleFilter}/>
        </div>

        <div class="col-sm-2"></div>
      </div>
    </div>
  );
}

export default App;
