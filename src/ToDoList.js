import React from 'react';
import ToDo from './ToDo';
import { useEffect } from 'react';


const ToDoList = ({toDoList, setToDoList, handleToggle, handleFilter,search, editTodo, setEditTodo, handleDelete}) => {

    // let toggleTask = true;
    let togglePriority = true;
    // let toggleDate = true;
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
        let newList = [...toDoList];
        const orderedArray = newList.sort((personA, personB) => personA.id > personB.id ? 1 : -1)

        console.table(orderedArray)
        setToDoList(orderedArray)
        console.log(newList)
    }


    const handleSortingPriority = () => {
        let newList = [...toDoList];
        let orderedArray;

        if(togglePriority){
            orderedArray = newList.sort((personA, personB) => getPriority(personA.priority) < getPriority(personB.priority) ? 1 : -1)
            togglePriority = false;
        }else{
            orderedArray = newList.sort((personA, personB) => getPriority(personA.priority) > getPriority(personB.priority) ? 1 : -1)
            togglePriority = true;
        }


        console.table(orderedArray)
        setToDoList(orderedArray)
        console.log(togglePriority)
    }
    
    const handleSortingDate = () => {
        let newList = [...toDoList];
        const orderedArray = newList.sort((personA, personB) => personA.date > personB.date ? 1 : -1)

        console.table(orderedArray)
        setToDoList(orderedArray)
        console.log(newList)
    }
    
    const handleSortingTask = () => {
        let newList = [...toDoList];
        const orderedArray = newList.sort((personA, personB) => personA.task > personB.task ? 1 : -1)

        console.table(orderedArray)
        setToDoList(orderedArray)
        console.log(newList)
    }

    useEffect(() => {
        console.log("Updated")
    },[toDoList])


    return (
        <div>
            
            <table class="table table-striped">
                <thead>
                    <tr style={{textAlign: "left"}}>
                        <th scope="col" style={{width: '200px', color: "#61DAC4", paddingLeft: "40px", cursor:"pointer"}} onClick={handleSortingId}>#</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4", cursor:"pointer"}} onClick={handleSortingTask}>Task</th>
                        <th scope="col" style={{width: '200px', color: "#61DAC4", cursor:"pointer"}} onClick={handleSortingPriority}>Priority</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4", cursor:"pointer"}} onClick={handleSortingDate}>Date</th>
                        <th scope="col" style={{width: '100px', color: "#61DAC4", cursor:"pointer"}}>Function</th>
                    </tr>
                </thead>
            </table>
            
            {toDoList.map(todo => {
                if(todo.task.toLowerCase().indexOf(search.toLowerCase())>-1){

                    return (
                        <ToDo toDoList={toDoList} setToDoList={setToDoList} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} editTodo = {editTodo} setEditTodo = {setEditTodo} handleDelete={handleDelete}/>
                    )
                }
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;