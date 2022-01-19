import { useMissions } from "../hooks/useMissions";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Mission from "../components/missions/Mission";
import ContainerGrid from "../components/UI/ContainerGrid";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

function Missions({ searchValue }) {
  const { error, loading, data } = useMissions();
  if (loading) return <Loading />;
  if (error) return <Error />;

  const allLaunches = data.launchesPast.filter(
    (launch) => launch.links.flickr_images.length > 0 && launch.details !== null
  );

  return (
    <ContainerGrid>
      {allLaunches
        .filter((item) => {
          if (searchValue === "") {
            return item;
          } else if (
            item.mission_name.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return item;
          }
        })
        .map((launch) => (
          <Mission key={uuidv4()} launch={launch} />
        ))}
    </ContainerGrid>
  );
}

export default Missions;
