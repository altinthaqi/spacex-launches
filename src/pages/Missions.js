import React from "react";
import { useMissions } from "../hooks/useMissions";

function Missions() {
  const { error, loading, data } = useMissions();

  if (loading) return <p>Loading...</p>;

  const launches = data.launchesPast;

  console.log(launches);
  return (
    <>
      {launches.map((launch) => (
        <p key={launch.mission_id}>Launch name: {launch.mission_name}</p>
      ))}
    </>
  );
}

export default Missions;
