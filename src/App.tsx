import React, { useState } from "react";
import "./App.css";

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState("");

  const handleTodoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoValue("");
  };
  return (
    <div className="App">
      {/* Clicked: {value} times */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleTodoOnChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
