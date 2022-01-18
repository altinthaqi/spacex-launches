import "./App.css";
import Missions from "./pages/Missions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rocket from "./pages/Rocket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/:id" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
