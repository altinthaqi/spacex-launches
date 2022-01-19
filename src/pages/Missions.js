import React from "react";
import { useMissions } from "../hooks/useMissions";
import Mission from "../components/missions/Mission";
import ContainerGrid from "../components/UI/ContainerGrid";

// {launches.map((launch) => (
//   <NavLink to={`/${launch.rocket.rocket.id}`}>
//     <p key={launch.mission_id}>Launch name: {launch.mission_name}</p>
//   </NavLink>
// ))}

function Missions(props) {
  return (
    <ContainerGrid>
      {props.allLaunches.map((launch) => (
        <Mission key={launch.mission_id} launch={launch} />
      ))}
    </ContainerGrid>
  );
}

export default Missions;
