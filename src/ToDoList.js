import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, setToDoList, handleToggle, handleFilter,search, editTodo, setEditTodo, handleDelete}) => {
    return (
        <div>
            
            <table class="table table-striped">
                <thead>
                    <tr style={{textAlign: "left"}}>
                        <th scope="col" style={{width: '200px', color: "#61DAC4", paddingLeft: "40px"}}>#</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4"}}>Task</th>
                        <th scope="col" style={{width: '200px', color: "#61DAC4"}}>Priority</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4"}}>Date</th>
                        <th scope="col" style={{width: '100px', color: "#61DAC4"}}>Function</th>
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