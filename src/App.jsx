import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/todoItems";
import WelcomeMesaage from "./components/welcomeMessage";
import "./App.css"
import { useState } from "react";
function App() {

  

const [todoItems,setTodoItems]=useState([]);
const handleNewItem = (itemName,itemDueDate)=>{
  
  const newTodoItems=[
    ...todoItems,
    {name: itemName,dueDate:itemDueDate},
  ];
  setTodoItems(newTodoItems)

}

const handleDeleteItem = (TodoItemName)=>{
  const newTodoItems= todoItems.filter((item)=> item.name !== TodoItemName)
  setTodoItems(newTodoItems)
}
  return (
    <center className="Todo-container">
      <AppName/>
      <AddToDo onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems}onDeleteClick={handleDeleteItem}></TodoItems>
     {todoItems.length===0 &&<WelcomeMesaage></WelcomeMesaage>}
      </center>
  );
}

export default App;
