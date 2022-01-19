import "./App.css";
import Missions from "./pages/Missions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rocket from "./pages/Rocket";
import Navigation from "./layout/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/:id" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
