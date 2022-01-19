import React from "react";
import Mission from "../components/missions/Mission";
import ContainerGrid from "../components/UI/ContainerGrid";
import { v4 as uuidv4 } from "uuid";

function Missions({ searchValue, allLaunches }) {
  return (
    <ContainerGrid>
      {allLaunches &&
        allLaunches
          .filter((item) => {
            if (searchValue === "") {
              return item;
            } else if (
              item.mission_name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            ) {
              return item;
            }
          })
          .map((launch) => <Mission key={uuidv4()} launch={launch} />)}
    </ContainerGrid>
  );
}

export default Missions;
