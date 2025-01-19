import { MdAddBox } from "react-icons/md";
import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
    
  };

  return (
    <div className="container ">
      <form className="row Ak-row"
      onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="Date" value ={dueDate}onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            
            className="btn btn-success Ak-button"
            
          >
            <MdAddBox/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
