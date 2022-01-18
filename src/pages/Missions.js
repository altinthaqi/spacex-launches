import React from "react";
import { useMissions } from "../hooks/useMissions";
import { NavLink } from "react-router-dom";

function Missions() {
  const { error, loading, data } = useMissions();

  if (loading) return <p>Loading...</p>;

  const launches = data.launchesPast;

  console.log(launches);
  return (
    <>
      {launches.map((launch) => (
        <NavLink to={`/${launch.rocket.rocket.id}`}>
          <p key={launch.mission_id}>Launch name: {launch.mission_name}</p>
        </NavLink>
      ))}
    </>
  );
}

export default Missions;
