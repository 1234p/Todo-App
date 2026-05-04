document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.querySelector(".todo__theme-switch");

  themeSwitch.innerHTML = `
    <img 
      src="/todo-app-main/images/icon-moon.svg" 
      alt="dark theme icon" 
      class="todo__theme-switch-icon"
    />
  `;
});
