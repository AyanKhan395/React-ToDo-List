import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import React, { useContext, useEffect } from "react";
import { Context } from "./Contexts/Context";

const ToDoForm = () => {
  const [state, setState] = useContext(Context);

  const handleChange = (value) => {
    // setUserInput(e.currentTarget.value)
    // console.log(e.currentTarget.value);
    setState((prev) => ({ ...prev, userInput: value }));
    console.log(state.userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("HEllo");
    let copy = [...state.toDoList];

    if (state.editTodo === 0) {
      copy = [
        ...copy,
        {
          id: state.toDoList.length + 1,
          task: state.userInput,
          complete: false,
          date: state.startDate,
          priority: state.priority,
        },
      ];
      setState((prev) => ({ ...prev, toDoList: copy }));
    } else {
      copy = [
        ...copy,
        {
          id: state.editTodo,
          task: state.userInput,
          complete: false,
          date: state.startDate,
          priority: state.priority,
        },
      ];
      setState((prev) => ({ ...prev, toDoList: copy }));
      setState((prev) => ({ ...prev, editTodo: 0 }));
    }
  };

  const handlePirority = (value) => {
    setState((prev) => ({ ...prev, priority: value }));
  };

  useEffect(() => {
    if (state.editTodo === 0) {
      setState((prev) => ({ ...prev, userInput: "" }));
      setState((prev) => ({ ...prev, priority: "Low" }));
      setState((prev) => ({ ...prev, startDate: new Date() }));
      console.log("IF");
    } else {
      state.toDoList.map((todo) => {
        if (todo.id === state.editTodo) {
          setState((prev) => ({ ...prev, userInput: todo.task }));
          setState((prev) => ({ ...prev, priority: todo.priority }));
          if (todo.date !== null) {
            setState((prev) => ({ ...prev, startDate: todo.date }));
          }

          console.log(todo.task);
          // setUserInput(todo.task);
          // setPirority(todo.priority);
          // if(todo.date !== null){
          //     setStartDate(todo.date)
          // }
        }
      });

      // const newTodos = state.toDoList.filter(e=> e.id !== state.editTodo);
      // setState(prev=> ({...prev, toDoList: newTodos}))

      console.log("Else");
    }
  }, [state.editTodo]);

  return (
    <form
      classname="form1"
      onSubmit={handleSubmit}
      style={{
        margin: "40px",
        border: "2px solid",
        borderRadius: "15px",
        paddingBlock: "30px",
        backgroundColor: "#20365E",
      }}
    >
      <h4 style={{ color: "#B0A8B9" }}>Form</h4>
      <br />
      <input
        value={state.userInput}
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter task..."
      />
      <br />
      <br />
      <div style={{ minWidth: "190px" }}>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={state.startDate}
          onChange={(date) => {
            //const d = new Date(date).toLocaleDateString('fr-FR');
            console.log(date.toLocaleDateString("fr-FR"));
            setState((prev) => ({ ...prev, startDate: date }));
            // console.log(state.startDate);
          }}
        />
      </div>

      <br />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div style={{ width: "190px", minWidth: "190px" }}>
          <Dropdown
            placeholder="Select Priority"
            options={["Low", "Medium", "High"]}
            value={state.priority}
            onChange={(value) => handlePirority(value["value"])}
            onSelect={(value) => console.log("selected!", value["value"])}
          />
        </div>
      </div>
      <br />

      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
