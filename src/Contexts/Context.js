import { createContext, useState } from "react";
import data from "../data.json";

export const Context = createContext();

const Provider = (props) => {

  const [state, setState] = useState({
    toDoList: data,
    userInput: '',
    startDate: new Date(),
    priority: 'Low',
    inputText: '',
    editTodo: 0
  })

  // const [toDoList, setToDoList ] = useState(data);
  // const [userInput, setUserInput ] = useState('');
  // const [startDate, setStartDate] = useState(new Date());
  // const [pirority, setPirority ] = useState('Low');
  // const [inputText, setInputText] = useState("");
  // const [editTodo, setEditTodo] = useState(0);

  // setState((prevState)=>({...prevState, number: "wasem",name:""}))
  // const [name, setName]= useState("Ali");
  // const [test, setTest] = useState ("Test");

  return (

    // <Context.Provider value={{value1: [name, setName], value2: [test, setTest]}}>
    <Context.Provider value={[state, setState]}>
        {props.children}
    </Context.Provider>
    
  );
};
export default Provider;