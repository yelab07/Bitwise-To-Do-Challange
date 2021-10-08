import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Input from "./Components/Input";
import FormContainer from "./Components/FormContainer";
import Button from "./Components/Button";
import TodoContainer from "./Components/TodoContainer";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText,setTodoText]=useState("")

  // console.log(todos);
  //saveing on type to my state
  const formChange = (e) => {
    // console.log(e.target.value);
    setTodoText(e.target.value);
  };
  const addToTodos = (e) => {
    e.preventDefault();
    const copyOfArrey = ([...todos]);
    copyOfArrey.push(todoText);
     setTodos(copyOfArrey);
  };
  const deleteTodo = (index) => {
    const copyOfArrey = ([...todos]);
    copyOfArrey.splice(index, 1);
    setTodos(copyOfArrey);
    
   };
  
  const updateTodo = (index) => {
    const copyOfArrey = ([...todos]);
    copyOfArrey[index] = todoText;
    setTodos(copyOfArrey);
   };
  
  // const formChange = (e) => {};

  const btnStyles = {
    marginTop: "20px",
    marginLeft: "5px",
    marginRight: "5px",
  };

  return (
    <div className="App">
      <FormContainer>
        <Form onSubmit={addToTodos}>
          <Input
            onChange={formChange}
            name="text"
            type="text"
            placeholder="todo text"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>

      <TodoContainer>
        {todos.map((todo, index) => (
          <Todo key={index}>
            <h1>{todo}</h1>
            <Button
              onClick={(e) => {
                e.preventDefault();
                deleteTodo(index);
              }}
              style={btnStyles}
            >
              Delete
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                updateTodo(index);
              }}
              style={btnStyles}
            >
              Update
            </Button>
          </Todo>
        ))}
      </TodoContainer>
    </div>
  );
}

export default App;
