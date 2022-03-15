import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const getColor = () => {
        let color;
        if (todo.priority === 'Low') {
            color = 'green';
        } else if (todo.priority === 'Medium') {
            color = 'yellow';
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
                    <th scope="row"  style={{width: '100px', color: "#1E1232"}}>{todo.id}</th>
                    <td  style={{width: '300px', color: "#1E1232"}}>{todo.task}</td>
                    <td style={{color: getColor(todo.priority), width: '300px'}}>{todo.priority}</td>
                    <td  style={{width: '300px', color: "#1E1232"}}>{todo.date ? todo.date.toLocaleDateString('fr-FR'):"-"}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ToDo;