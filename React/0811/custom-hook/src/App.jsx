//app.jsx
import Contents from "./Contents";
import LangSelector from "./LangSelector";
import { LanguageProvider } from "./LanguageProvider";
import { ThemeProvider, ThemeToggleButton, useTheme } from "./Hook/themes.js";
function AppContent() {
  const { theme } = useTheme();
  return (
    <div className={`${theme.container}`}>
      <ThemeToggleButton />
      <LanguageProvider>
        <LangSelector />
        <Contents />
      </LanguageProvider>
    </div>
  );
}
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
export default App;
