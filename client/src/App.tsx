import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import "./App.scss";

type theme = "light" | "dark";

export default function App() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [theme, setTheme] = useState<theme>("dark");

  const handleToggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <div className="todo__content">
      <header className="todo__header">
        <h1 className="todo__title">Todo</h1>
        <div className="todo__theme-switch" onClick={handleToggleTheme}>
          {theme === "dark" ? <IoSunny /> : <IoMoon />}
        </div>
      </header>

      <div className="todo__add-todo">
        <button
          type="button"
          className={`todo__add-btn ${isHover && "todo__add-btn--hover"}`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover && <FaPlus />}
        </button>
        <input
          type="text"
          placeholder="Create a new Todo..."
          className="todo__add-input"
        />
      </div>

      <div className="todo__todo-list"></div>

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
