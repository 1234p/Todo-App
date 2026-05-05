import { create } from "zustand";

type themeOptions = "light" | "dark"

interface State {
  theme: themeOptions;
  toggleTheme: () => void;
}

export const useThemeToggleStore = create<State>((set) => ({
  theme: "dark",
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }))
}))