import { useState, createContext, useContext, createElement } from "react";

const themes = {
  light: {
    name: "라이트 모드",
    h2: "text-2xl font-bold text-gray-900 mb-4",
    h3: "text-xl font-semibold text-gray-800 mb-3",
    p: "text-gray-700 leading-relaxed mb-2",
    button: "font-medium shadow-md border border-gray-700 m-4",
    modeButton: "bg-gray-800 hover:bg-gray-900 text-white font-medium shadow-md text-lg m-4",
    container: "bg-white text-gray-900 h-screen text-center",
  },
  dark: {
    name: "다크 모드",
    h2: "text-2xl font-bold text-white mb-4",
    h3: "text-xl font-semibold text-gray-100 mb-3",
    p: "text-gray-300 leading-relaxed mb-2",
    button: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium shadow-md border border-gray-300 m-4",
    modeButton: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium shadow-md border border-gray-300 text-lg m-4",
    container: "bg-gray-900 text-white h-screen text-center",
  },
};

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => setTheme((prev) => (prev === themes.light ? themes.dark : themes.light));

  return createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
}

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return createElement(
    "button",
    {
      onClick: toggleTheme,
      className: `${theme.modeButton}`,
    },
    `${theme.name === "라이트 모드" ? "다크 모드" : "라이트 모드"}`
  );
}
