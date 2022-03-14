import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const getBackgroundColor = () => {
        let color;
        if (todo.priority === 'Low') {
            color = 'green';
        } else if (todo.priority === 'Medium') {
            color = 'orange';
        } else if (todo.priority === 'High') {
            color = 'red';
        } else {
            color = 'black';
        }
        return color;
    };

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    console.log(todo)
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                        
            <table class="table table-striped">
                <tbody>
                    <tr>
                    <th scope="row"  style={{width: '100px'}}>{todo.id}</th>
                    <td  style={{width: '300px'}}>{todo.task}</td>
                    <td style={{color: getBackgroundColor(todo.priority), width: '300px'}}>{todo.priority}</td>
                    <td  style={{width: '300px'}}>{todo.date ? todo.date.toLocaleDateString('fr-FR'):"-"}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ToDo;