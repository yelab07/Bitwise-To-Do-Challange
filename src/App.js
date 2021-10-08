import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Input from "./Components/Input";
import FormContainer from "./Components/FormContainer";
import Button from "./Components/Button";
import TodoContainer from "./Components/TodoContainer";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState(["Hello", "How are you?"]);
  const [todoText,setTodoText]=useState("")

  // console.log(todos);
  //saveing on type to my state
  const formChange = (e) => {
    console.log(e.target.value);
    // setTodoText(e.target.value);
  };
  const addToTodos = (e) => {
    e.preventDefault();
    const copyOfArrey = ([...todos]);
    copyOfArrey.push(todoText);
     (todoText);
  };
  const deleteTodo = (index) => {};
  const updateTodo = (index) => {};
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
          <Input onChange={formChange}
 name="text" type="text" placeholder="todo text" />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>

      <TodoContainer>
        {todos.map((todo, index) => (
          <Todo key={index}>
            <h1>{todo}</h1>
            <Button style={btnStyles}>Delete</Button>
            <Button style={btnStyles}>Update</Button>
          </Todo>
        ))}
      </TodoContainer>
    </div>
  );
}

export default App;
