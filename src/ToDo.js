import React from 'react';
import FontAwesome from 'react-fontawesome';

const ToDo = ({toDoList, setToDoList, todo, handleToggle, editTodo, setEditTodo, handleDelete}) => {

    const getColor = () => {
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

    const handleDeleteTodo = (id) => {
        const newTodos = toDoList.filter(e=> e.id !== id);
        setToDoList(newTodos)
    }

    const handleEditTodo = (id) => {
        const newTodos = toDoList.filter(e=> e.id === id);
        setEditTodo(newTodos)
    }


    console.log(todo)
    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
            
            <table class="table table-striped">
                <tbody>
                    <tr style={{textAlign: "left"}}>
                    <th scope="row"  style={{width: '200px', color: "#1E1232", paddingLeft: "40px"}}>{todo.id}</th>
                    <td style={{width: '300px', color: "#1E1232"}}>{todo.task}</td>
                    <td style={{color: getColor(todo.priority), width: '200px'}}>{todo.priority}</td>
                    <td style={{width: '300px', color: "#1E1232"}}>{todo.date ? todo.date.toLocaleDateString('fr-FR'):"-"}</td>
                    <td id={todo.id} style={{width: '100px', color: "#1E1232"}}>
                        <FontAwesome name="edit"  onClick={()=>handleEditTodo(todo.id)}/>
                        <FontAwesome name="trash" style={{marginLeft: "20px"}} onClick={()=>handleDeleteTodo(todo.id)}/>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ToDo;