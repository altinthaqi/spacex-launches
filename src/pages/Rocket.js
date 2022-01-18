import React from "react";
import { useParams } from "react-router-dom";
import { useRocket } from "../hooks/useRocket";

function Rocket() {
  const { id } = useParams();

  const { error, loading, data } = useRocket(id);

  if (loading) return <p>Loading...</p>;

  console.log(data);
  return (
    <div>
      {data.rocket.company}
      <br />
      <br />
      {data.rocket.country}
      <br />
      <br />
      {data.rocket.description}
    </div>
  );
}

export default Rocket;
