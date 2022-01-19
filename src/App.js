import { useState, useEffect } from "react";
import "./App.css";
import Missions from "./pages/Missions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rocket from "./pages/Rocket";
import Navigation from "./layout/Navigation";
import { useMissions } from "./hooks/useMissions";

function App() {
  const { error, loading, data } = useMissions();
  const [searchValue, setSearchValue] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  let allLaunches = data.launchesPast.filter(
    (launch) => launch.links.flickr_images.length > 0 && launch.details !== null
  );

  const searchInputHandler = (query) => {
    setSearchValue(query);
  };

  return (
    <BrowserRouter>
      <Navigation onSearch={searchInputHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <Missions allLaunches={allLaunches} searchValue={searchValue} />
          }
        />
        <Route path="/:id" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
