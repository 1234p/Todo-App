import { GoPlus } from "react-icons/go";
import "./App.scss";

export default function App() {
  return (
    <div className="todo__content">
      <header className="todo__header">
        <h1 className="todo__title">Todo</h1>
        <div className="todo__theme-switch"></div>
      </header>

      <div className="todo__add-todo">
        <button type="button" className="todo__add-btn">
          <GoPlus />
        </button>
        <input type="text" className="todo__add-new-todo" />
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
