import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Missions from "./pages/Missions";
import Rocket from "./pages/Rocket";
import Navigation from "./layout/Navigation";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const searchInputHandler = (query) => {
    setSearchValue(query);
  };

  return (
    <BrowserRouter>
      <Navigation onSearch={searchInputHandler} />
      <Routes>
        <Route path="/" element={<Missions searchValue={searchValue} />} />
        <Route path="/:id" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
