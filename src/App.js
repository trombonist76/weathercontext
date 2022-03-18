import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { LocationProvider } from "./contexts/LocationContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function App() {
  
  return (

    <div className={`App`}>
      <ThemeProvider>
          <LocationProvider>
            <Navbar />
            <Container />
          </LocationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
