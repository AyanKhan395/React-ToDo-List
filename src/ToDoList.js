import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter,search}) => {
    return (
        <div>
            
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" style={{width: '100px', color: "#61DAC4"}}>#</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4"}}>First</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4"}}>Last</th>
                        <th scope="col" style={{width: '300px', color: "#61DAC4"}}>Handle</th>
                    </tr>
                </thead>
            </table>
            
            {toDoList.map(todo => {
                if(todo.task.toLowerCase().indexOf(search.toLowerCase())>-1){

                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                }
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;