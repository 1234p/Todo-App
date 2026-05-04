import "./App.scss";

export default function App() {
  return (
    <div className="todo__content">
      <header className="todo__header">
        <h1 className="todo__title">Todo</h1>
        <div className="todo__theme-switch"></div>
      </header>

      <p>
        Todo
        {/* Add dynamic number */}
        items left All Active Completed Clear Completed Drag and drop to reorder
        list
      </p>

      <footer className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}
