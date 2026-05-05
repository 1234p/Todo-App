import { useState } from "react";
import { useThemeToggleStore } from "./stores/useThemeToggleStore";
import { FaPlus } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import "./App.scss";

export default function App() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const theme = useThemeToggleStore((s) => s.theme);
  const toggleTheme = useThemeToggleStore((s) => s.toggleTheme);

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
