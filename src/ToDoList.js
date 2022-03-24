import React,{useContext} from 'react';
// import ToDo from './ToDo';
import { Context } from "./Contexts/Context";

import FontAwesome from 'react-fontawesome';


const ToDoList = () => {

    const [state, setState] = useContext(Context);

    let togglePriority = true;

    const getPriority = (x) => {
        if(x === 'Low'){
            return 1;
        }else if (x === 'Medium'){
            return 2;
        }else{
            return 3;
        }
    }

    const handleSortingId = () => {
        let newList = [...state.toDoList];
        const orderedArray = newList.sort((personA, personB) => personA.id > personB.id ? 1 : -1)

        setState(prev=> ({...prev, toDoList: orderedArray}))
    }


    const handleSortingPriority = () => {
        let newList = [...state.toDoList];
        let orderedArray;

        if(togglePriority){
            orderedArray = newList.sort((personA, personB) => getPriority(personA.priority) < getPriority(personB.priority) ? 1 : -1)
            togglePriority = false;
        }else{
            orderedArray = newList.sort((personA, personB) => getPriority(personA.priority) > getPriority(personB.priority) ? 1 : -1)
            togglePriority = true;
        }


        console.table(orderedArray)
        setState(prev=> ({...prev, toDoList: orderedArray}))
        console.log(togglePriority)
    }
    
    const handleSortingDate = () => {
        let newList = [...state.toDoList];
        const orderedArray = newList.sort((personA, personB) => personA.date > personB.date ? 1 : -1)

        setState(prev=> ({...prev, toDoList: orderedArray}))
    }
    
    const handleSortingTask = () => {
        let newList = [...state.toDoList];
        const orderedArray = newList.sort((personA, personB) => personA.task > personB.task ? 1 : -1)

        setState(prev=> ({...prev, toDoList: orderedArray}))
    }

    const getColor = (x) => {
        let color;
        if (x === 'Low') {
            color = 'green';
        } else if (x === 'Medium') {
            color = 'orange';
        } else if (x === 'High') {
            color = 'red';
        } else {
            color = 'black';
        }
        return color;
    };
    
    const handleDeleteTodo = (id) => {
        const newTodos = state.toDoList.filter(e=> e.id !== id);
        setState(prev=> ({...prev, toDoList: newTodos}))
    }

    const handleEditTodo = (id) => {
        // const newTodos = state.toDoList.filter(e=> e.id === id);
        setState(prev=>({...prev, editTodo: id}))
        // state.editTodo = id;
        console.log(state);
    }

    const handleToggle = (id) => {
        let mapped = state.toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setState(prev=> ({...prev, toDoList: mapped}))
    }
    
    const handleFilter = () => {
        let filtered = state.toDoList.filter(task => {
            return !task.complete;
        });
        setState(prev=> ({...prev, toDoList: filtered}))
    }

    return (
        <div>
            
            <table class="table table-striped">
                <thead>
                    <tr style={{textAlign: "left"}}>
                        <th scope="col" style={{width: '200px', color: "#61DAC4", marginLeft: "40px", cursor:"pointer"}} onClick={handleSortingId}>#</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4", cursor:"pointer"}} onClick={handleSortingTask}>Task</th>
                        <th scope="col" style={{width: '200px', color: "#61DAC4", cursor:"pointer"}} onClick={handleSortingPriority}>Priority</th>
                        <th scope="col" style={{width: '200px', color: "#61DAC4", cursor:"pointer"}} onClick={handleSortingDate}>Date</th>
                        <th scope="col" style={{width: '100px', color: "#61DAC4", cursor:"pointer"}}>Function</th>
                    </tr>
                </thead>

                
                <tbody>
                    {
                    state.toDoList.map(todo => {
                        if(todo.task.toLowerCase().indexOf(state.inputText.toLowerCase())>-1){
                            return(  
                                <tr style={{textAlign: "left"}}>
                                    <th scope="row"  style={{width: '200px', color: "#1E1232", marginLeft: "40px"}}>{todo.id}</th>
                                    <td style={{width: '300px', color: "#1E1232"}} onClick={()=>handleToggle(todo.id)} className={todo.complete ? "todo strike" : "todo"}>{todo.task}</td>
                                    <td style={{width: '200px', color: getColor(todo.priority)}}>{todo.priority}</td>
                                    <td style={{width: '200px', color: "#1E1232"}}>{todo.date ? todo.date.toLocaleDateString('fr-FR'):"-"}</td>
                                    <td style={{width: '100px', color: "#1E1232"}}>
                                        <FontAwesome name="edit"  onClick={()=>handleEditTodo(todo.id)}/>
                                        <FontAwesome name="trash" style={{marginLeft: "20px", zIndex: "-1"}} onClick={()=>handleDeleteTodo(todo.id)}/>
                                        </td>
                                </tr>
                            )
                        }
                    }
                    
                    
                    )}
                    
                </tbody>
            </table>
            <button style={{marginBlock: '20px'}} onClick={handleFilter}>Clear Completed Tasks</button>
        </div>
    );
};

export default ToDoList;