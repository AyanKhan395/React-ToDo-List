import React from "react";
//mock data
// import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Provider from "./Contexts/Context";
import Search from "./Search";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div class="row">
          <div class="col-lg-4 col-md-3 col-sm-2"></div>

          <div class="col-lg-4 col-md-6 col-sm-8">
            <ToDoForm />
          </div>

          <div class="col-lg-4 col-md-3 col-sm-2"></div>
        </div>

        <Search />

        <div class="row">
          <div class="col-sm-2"></div>

          <div class="col-sm-8">
            <ToDoList />
          </div>

          <div class="col-sm-2"></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
