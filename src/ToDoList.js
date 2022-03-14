import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" style={{width: '100px'}}>#</th>
                        <th scope="col" style={{width: '300px'}}>First</th>
                        <th scope="col" style={{width: '300px'}}>Last</th>
                        <th scope="col" style={{width: '300px'}}>Handle</th>
                    </tr>
                </thead>
            </table>
            
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;