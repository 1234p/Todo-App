import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import { getTodos, createTodo } from "./api/todos";
import "./App.scss";

type themeOptions = "light" | "dark";

interface myTodo {
  todo: string;
  stage: string;
}

export default function App() {
  const [todos, setTodos] = useState<Array<myTodo>>([]);
  const [newTodo, setNewTodo] = useState("");
  const [isHover, setIsHover] = useState<boolean>(false);
  const [theme, setTheme] = useState<themeOptions>("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const fetchTodos = async () => {
    const res = await getTodos();

    if (!res.ok) {
      console.log(res.error);
      return;
    }

    setTodos(res.data);
  };

  const createNewTodo = async () => {
    if (!newTodo.trim()) return;

    const todo = newTodo.trim();
    const res = await createTodo(todo);

    if (!res.ok) {
      console.log(res.error);
      return;
    }

    setTodos((prev) => [...prev, res.data]);
    setNewTodo("");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={`todo__content ${theme}`}>
      <header className="todo__header">
        <h1 className="todo__title">Todo</h1>
        <div className="todo__theme-switch" onClick={toggleTheme}>
          {theme === "dark" ? <IoSunny /> : <IoMoon />}
        </div>
      </header>

      <div className="todo__add-todo">
        <button
          type="button"
          className={`todo__add-btn ${isHover && "todo__add-btn--hover"}`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => createNewTodo()}
        >
          {isHover && <FaPlus />}
        </button>
        <input
          type="text"
          placeholder="Create a new Todo..."
          className="todo__add-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>

      <div className="todo__todo-list">
        {todos.slice(1).map((todo) => (
          <div className="todo__todo-item">
            <input
              type="checkbox"
              className="todo__completedCheckbox"
              checked={todo.stage === "active" ? true : false}
            />
            <div className="todo__todo-name">{todo.todo}</div>
          </div>
        ))}
      </div>

      <footer className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by
        <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}
